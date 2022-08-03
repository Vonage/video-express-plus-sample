const dotenv = require('dotenv');
const express = require('express');

const axios = require('axios');
const enforce = require('express-sslify');
const { RoomManager } = require('./videoexpressplus/server');

const port = process.env.PORT || 3000;

let glblSessionId;

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTU5MjIxMDQsImV4cCI6MTY4NzQ1ODEwNCwianRpIjoiU1dtTncxOTZsamZNIiwiYXBwbGljYXRpb25faWQiOiIzOTViNmFjNy05NTczLTQ5YTMtYTU3Zi01OTM3NDdjMGVkNmQifQ.enInQCjw5uzN5-jryafouCioYUHSVtfJq71EWHD4yiXT0X_Gz9wUW8lquohyIGl-YOPuhT5t7wavTf3lI8cxhQ9wMkd2vMt7VCsXfXAvN7SPHh6up6FVxJ9IkE4nTTUzaReRTzD8_3NBKNQyhDCCFJE_hSwSdsSJlwhzZqUqzwmYZgNfou0K6Jq5U0broAWT7sRIdAqwMWuWf88nYl3HQ2tdiJlgz7i7C2K5fFsh8uuk_2sxTOP-jn4WBSBH1QZC-7hKNh0ctfaYekjOJYXrED2J0hyDDrWN__9QaUF7ypf7VFZw6nnOlc5xuDaFUJTE-Hi7jRPm9CdYp2YEX7sy6g';

dotenv.config();

const app = express();
const roomManager = new RoomManager(
  process.env.API_KEY,
  process.env.API_SECRET,
);

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/join/:room', (req, res) => {
  res.sendFile(`${__dirname}/dist/call.html`);
});

app.post('/api/vve', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    roomManager.handleClientEvent(req.body).then((response) => {
      res.status(200).send(response);
    });
  } catch (e) {
    res.status(500).send({ error: e });
  }
});

app.post('/api/whiteboard/sessions/create', async (req, res) => {
  try {
    const url = `${process.env.WHITEBOARD_API_ENDPOINT}/sessions`;
    const response = await axios.post(
      url,
      {
        boardName: req.body.boardName,
        isLocked: false,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = response;
    glblSessionId = data.sessionId;
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'createWhiteboardSession error' });
  }
});

app.post('/api/whiteboard/sessions/join', async (req, res) => {
  try {
    console.log(glblSessionId);
    const url = `${process.env.WHITEBOARD_API_ENDPOINT}/sessions/${glblSessionId}/join`;
    console.log(url);
    const response = await axios.post(
      url,
      {
        numberOfParticipants: 2,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const { data } = response;
    data.sessionId = glblSessionId;
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'joinWhiteboardSession error' });
  }
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
