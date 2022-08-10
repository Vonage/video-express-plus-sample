const dotenv = require('dotenv');
const express = require('express');
const enforce = require('express-sslify');
const { RoomManager } = require('@vonage/video-express-plus-server');

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();
const roomManager = new RoomManager(
  process.env.APPLICATION_ID,
  process.env.PRIVATE_KEY,
  { breakout: true, whiteboard: true, waiting: true },
);

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/dist`));

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

app.post('/api/get-participant', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    const participant = roomManager.addParticipant(
      req.body.name,
      req.body.role === 'host',
    );
    res.status(200).send(participant);
  } catch (e) {
    res.status(500).send({ error: e });
  }
});

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
