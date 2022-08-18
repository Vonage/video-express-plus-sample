# Video Express Plus sample

A sample app for Vonage Video Express Plus.

**Note:** Vonage Video Express Plus is currently in part of an Early Access program.
Please contact Vonage (mailto:video.api.beta@vonage.com) for more information.

Vonage Video Express Plus is a solution for creating web applications that use the
[Vonage Video API](https://www.vonage.com/communications-apis/video/). Video Express Plus
include a client-side SDK and server-side SDK that work together to let you easily
enable multi-parti multi-room video applications.

The server-side SDK is defined in the `@vonage/server` Node package, and the client SDK
is defined in the `@vonage/client` Node package. You install the server-side SDK on your
web server, and you load the client SDK in the web client page.

The server SDK lets you add participants to your video application. The client
SDK automatically builds the UI for hosts (who administer the video rooms)
and viewers (participants) who join without administration privileges.

A Video Express Plus application has one main room, and a host can add multiple breakout
rooms. The Video Express Plus client communicates with the server to maintain the state of
all rooms and participants. You do not need to use a Video API server SDK (such as the
Vonage Video API Node SDK) to create and manage Video API session IDs and tokens. The
Vonage Video Plus server SDK automatically generates Video API sessions and tokens
for each room and participant.

This repo includes three sample applications:

* Vanilla -- A web application, using Express.

* Angular -- An AngularJS app.

* React -- A React app.

## Requirements

To run this project locally you need the following:

* Nodejs (v16.13.2)

* npm (v8+)

You will need to obtain a npmjs token to install the private video-express-plus
Node module. Contact Vonage (mailto:video.api.beta@vonage.com) to obtain this.

When you participate in the Video Express Plus Early Access program, Vonage will
enable the Vonage Video API and whiteboard for your account.

You will need a Vonage application ID and a private key for a Vonage application
in your account:

1. Go to <https://dashboard.nexmo.com/> and log into your Vonage account.

2. Click *Applications* in the left-hand menu.

3. Click the application you want to use with your site that uses Vonage Video Express.

   Or click the *Create a new application* link at the top of the page).

4. Copy the application ID and save for future reference.

5. Click the *Edit* button. In the Edit app page, click the *Generate public and private key*
   button.

6. Check the downloads directory for the private.key file.

7. Scroll to the bottom of the page and enable *Video (beta)* for the application.

8. Click the *Save changes* button.

## Installing dependencies

1. You need to be logged into your npmjs account to install the private
   `@vonage/video-express-plus` module. Use `npm whoami` and `npm login`.

2. Clone the repository.

```sh
git clone https://github.com/jeffswartz/video-express-plus-sample.git
cd video-express-plus-sample
```

3. Use the correct version of Node (v16):

  ```sh
  nvm use
  ```

4. cd to the Vanilla directory:

  ```sh
  cd Vanilla
  ```

5. Add an environment variable with the npmjs token provided to you
   (see the Requirements section above):

   ```sh
   export NPM_TOKEN=npm_QX0T.....vCX   # Replace with your token string
   ```

6. Install dependencies:

  ```sh
  npm install
  ```

## Configuring and building the app

This initial version of the README file includes info on using the Vanilla web app only.

1. `cd` to the sample directory you will be using

  ```sh
  cd Vanilla
  ```

2. Copy the `.env.example` file to an `.env` file in the sample directory you will be using,
   and update the values:

  ```sh
  cp .env.example Vanilla/.env
  ```

  Set the following values:

* APPLICATION_ID -- Your Vonage application ID.

* PRIVATE_KEY -- A private key for your Vonage application. Note that multiline
    strings in the .env file are supported, as follows:

    ```"-----BEGIN PRIVATE KEY-----
    MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCahnKaw+QFI+FN
    ....
    ....
    2ge/Lqb2t869vcdsfqc7Wg==
    -----END PRIVATE KEY-----
    "
    ```

  You can set environment variables, instead of setting values in the .env file:

  ```sh
  export APPLICATION_ID=1234-5679-...-7890
  export PRIVATE_KEY=$(cat /path-to-file/private.key)
  ```

3. Build the project:

  ```sh
  npm run build
  ```

## Running the app locally

* To simply run the app:

  ```sh
  npm server
  ```

  This builds the UI and runs the server.

* Or to run the server and watch the files for changes:

  ```sh
  npm run watch
  ```

Then test the application:

1. Open `http://localhost:3000` in a supported browser (such as Chrome, Firefox,
   or Safari).

2. In the web page, select the camera and microphone you want to use. Then enter
   your name (which will be displayed to other users) and click the _Join
   Meeting_ button.

   The page redirects to the call page, where the meeting takes place. You have
   joined as a host, and your audio-video stream is now live in the main room.

3. Open `http://localhost:3000/?inviteRoomId=test` in a second browser tab.

4. Again, select the camera and microphone you want to use. (If you have a
   different camera attached, select it so that you will be able to
   differentiate between the two test users in the classroom.) Then enter a
   different name (than you used before) and click the *Join Meeting* button.

   For this test app, including the `?inviteRoomId=test` query string has you
   join the meeting as a viewer (not a host). A viewer joins the call page is
   initially added to a waiting room until a host lets them into the main room.

Next we will test the host UI controls for managing the meeting. First we will
have the host let the viewer into the main room:

1. Open the browser tab for the host.

2. Click the *Show Add-ons* button,

3. In the Add-ons panel, click *Waiting Room*.

4. Mute the speaker on your computer. Otherwise, when the host lets the viewer
   into the main room there will be audio feedback. (This is only required when
   testing locally with two tabs on the same computer.)

5. In the Waiting Room panel, find the name of the viewer and click the *Admit*
   button.

   The viewer is now in the main room, along with their audio-video stream.

Next you will create a break-out room:

1. Close the *Waiting Room* panel.

2. In the Add-ons panel, click *Create Breakout*.

3. In the Create Breakout panel, select 1 as the number of rooms, leave the
   timer set to 5 minutes, leave the *Divide students manually* option set, and
   then click *Create Rooms*, at the bottom of the panel.

4. Click the + icon at the top of the panel, click the checkbox to the left of
   the viewers name. Then select the breakout room from the drop-down menu
   (there is only one breakout room). Then click the *Assign to breakout room*
   link, at the bottom of the panel.

   The viewer is now in a separate breakout room. A breakout room is another
   meeting room, separate from the main room. At the end of the time period, all
   participants return from the breakout room(s) to the main room.

The host can also close all rooms at any time and have all participants return
to the main room:

1. In the Add-ons panel, click *Create Breakout*.

2. Click the *Close all rooms* link at the bottom of the panel.

The host can also use the whiteboard to share drawings with all participants in
the main room:

1. In the browser tab for the host, click the *Show Add-ons* button,

2. In the Add-ons panel, click *Whiteboard*.

## UI features

The bottom control panel of the client UI includes the following buttons:

* Raise hand -- Click to raise your hand. Your raised hand will appear along with your video
  in other participants' views of the room.

* Screen-share (host only) -- A host can share the screen with all participants in the main room.

* Microphone and camera toggle -- Any participant can toggle their microphone or camera on and off.

* Add-ons (host-only) -- Display and hide the Add-ons control panel. This includes options that
  lets the host create and manage break-out rooms, admit participants into the main room (from the
  waiting room), and share a whiteboard with all participants in the main room.

* Text chat -- Lets participants in the main room exchange text messages.

* Participants (host only) -- Lets the host manage participants. The host can disable audio and video
  for a specific viewer or for all viewers. And the host can eject a viewer from the session.

## Deploying the application

OpenTok.js (used by the client application) loads the background blur video filter from
an external source hosted at cloudfront.net. If your website enforces a content security policy
and your app uses the background blur filter, you will need to have your content security policy
allow scripts loaded from `https://d3opqjmqzxf057.cloudfront.net`:

```
Content-Security-Policy: script-src blob: ;
``````

The background blur filter uses a worker, so you also need to whitelist the `blob:` URI scheme
in one of the following CSP directives: `worker-src` (which doesn’t work with Safari), `child-src`,
`script-src`, or `default-src`. As in the following:

```
Content-Security-Policy: child-src blob: ;
``````

## Understanding the code

The sample app (in the sample subdirectory) shows the basic use of the server
and client APIs.

Note that in an upcoming version, the server-side module will be available as a
Node module from npmjs.com. And the client library will be available as a
JavaScript script file available at a public URL and as a Node module available
at npmjs.com.

See the following code in the /sample/index.js file:

````javascript
import RoomManager from '@vonage/video-express-plus';

const APPLICATION_ID = 'abcd123';
const PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----...';

const roomManager = new RoomManager({
  applicationId: APPLICATION_ID, // for a Vonage application
  privateKey: PRIVATE_KEY,    // for the Vonage application
  hasBreakoutRooms: true,
  hasWaitingRoom: true,
  hasWhiteboard: false,
});
```
```javascript
const teacher = roomManager.getParticipant('jeff.swartz@vonage.com')
  || roomManager.addParticipant(
  'Jeff', // name
  true, // isHost
  'jeff.swartz@vonage.com', // id
);
````

Also the following code in the index.js file sets up a callback URL route
handler, which is used to handle POST requests from the client web application.
This callback URL handler calls the `RoomManager.handleClientEvent()` method of
our SDK and uses the resolved value from the Promise returned by the
`RoomManager.handleClientEvent()` method as the response to the POST request:

```javascript
module.exports = (express, app) => {
  app.get('/video-express-classroom/callbackPath', (req, res) => {
    // handleClientEvent() is defined in the RoomManager API
    roomManager.handleClientEvent(req.body).then(res.send);
  });
};
```

The client-side index.html page is used to have participants log in to the app.
In this sample app, there is no user authentication. A user that joins the page
with the `?inviteRoomId=test` query string appended to the URL will be added as
a viewer; otherwise, a user is added as a host. This is for test purposes only.
Your server code should authenticate users and determine if a user is a host or
a viewer.

The client-side HTML page loads a script that calls the following:

```javascript
import VideoExpressPlus from '@vonage/video-express-plus';

const roomController = new VideoExpressPlus.RoomController({
  callbackUrl: '/api/vve',
  container: 'controller',
  participantId: 'fDk1dzM0yUWyCRMl0QO3yg',
});
roomController.init();
```

See the following sections for details on the API.

## Server-side API reference

*Note:* This document uses TypeScript definitions as a formality. It is not
required to use TypeScript to use the libraries.

The public API in the server-side Node module is as follows:

```javascript

export type Participant {
  /** The ID passed into the `addParticipant()`, `getParticipant()`, `updateParticipant()`
    and `deleteParticipant()` methods.  */
  id: string;
  /**
    The unique ID assigned to the participant. This is different than the `id`, which is
    ID passed into the `addParticipant()`, `getParticipant()`, `updateParticipant()`
    and `deleteParticipant()` methods. The RoomManager.addParticipant() creates a unique
    (and different) participant ID. Add the participant ID to the client-side
    `RoomManager()` constructor. This way, if the developer's identifier for a participant
    includes personal identifiable data (such as an email address), it will not be exposed
    to the client. The client and server SDKs use the participant ID internally to
    identify participants.
   */
  participantId: string;
  /** Whether the participant is a host (true) or not (false). */
  isHost: Boolean;
  /** The participant name. */
  name: string;
};

export class RoomManager {
  constructor ({
    applicationId: string, // for a Vonage application
    privateKey: string,    // for the Vonage application
    hasBreakoutRooms?: Boolean, // default true?
    hasWaitingRoom?: Boolean, // default true?
    hasWhiteboard?: Boolean, // default true?
  });

  // Methods:

  /**
   * Adds a participant.
   *
   * @param name The name to display in the UI. This need not be unique.
   * @param isHost (optional) Whether the participant is (initially) a host.
   *        Any participant can later be promoted to a host. The default value is `false`.
   * @param inputId (optional) Your unique identifier for the participant. The developer will specify
   *        this based on their own user identity records. The developer uses this ID
   *        and look up users by their identifiers when they call `getParticipant()`.
   *        The SDK will map this ID to a unique (and different) participant ID, which is set to the
   *        `participantId` property of the returned Participant object. Add the
   *        participant ID to the client-side `RoomManager()` constructor. The client and server SDKs
   *        use the participant ID internally to identify participants. This way, if the developer's
   *        identifier for a participant includes personal identifiable data (such as
   *        an email address), it will not be exposed to the client.
   * @return The messaging session token for the participant
   */
  addParticipant(name: string, isHost?: boolean, id?: string): Participant;

  /**
   * Gets a participant's info, to be used in the client constructor.
   * @param id The developer's unique identifier for the participant. (Note that this
   *        is different than the `participantId` property of the Participant object.)
   * @return The Participant object with properties defining the participant. Or undefined
   *        if the participant does not exist (was not previously added with the addParticipant() method).
   */
  getParticipant(id: string): Participant | undefined;

  /**
   * Gets an array of Participant objects (for all Participants).
   *
   * @return array of Participant objects.
   */
  getParticipants(): Participant | undefined;

  /**
   * Update's a participant name.
   * @param id The developer's unique identifier for the participant. (Note that this
   *        is different than the `participantId` property of the Participant object.)
   * @param options The property values for a participant -- `name` and `isHost`.
   *        Note that the UI of the client RoomController includes options for hosts
   *        to promote a viewer to a host (non-programmatically).
   * @return The Participant info. Or undefined if the participant
   *        does not exist (was not previously added with the addParticipant() method).
   */
  updateParticipant(id: string, options: {
    name: string,
    isHost: Boolean,
  }): Participant | undefined;

  /**
   * Deletes a participant. As a result, the participant will also be disconnected from the
   * classroom in the client.
   *
   * @param id The developer's unique identifier for the participant. (Note that this
   *        is different than the `participantId` property of the Participant object.)
   */
  deleteParticipant(id: string): undefined;

  /**
   When the server callback URL receives a POST request,
   the handler for the request should call this method, passing in
   the body of the request. The RoomManager code will then automatically
   call internal methods store state for the app and message to other
   clients as needed. When the promise returned by the methhod
   is resolved, the developer must send the object resolved
   with the Promise as the response to the POST request.
   @param body The body of the request.
   @returns Promise The developer must send the object resolved
     with the Promise as the response to the POST request.
  */
  handleClientEvent(body: any): Promise;

  /**
    Register a function to handle asynchronous errors.
    See "Asynchronous errors" below.
  */
  onError(callback: function(error: Error)): void;
}
```

### Client-side API

Use the `VideoExpressPlus.RoomController()` to instantiate a client-side room
controller.

*Note:* This document uses TypeScript definitions as a formality. It is not
required to use TypeScript to use the libraries.

```javascript
{
declare namespace VideoExpressPlus {
  export class RoomController {
    /**
      The constructor takes one object, with the following properties:

      * participantId -- The unique ID assigned to the participant. This is the
        `participantId` property of the Participant object returned by the server-side
        `RoomManager.addParticipant()` and `RoomManager.getParticipant()` methods.
      * callbackUrl -- On the server the developer will need to set up a callback URL.
          See the docs for the server-side `RoomManager.handleClientEvent()` method.
      * container -- The DOM element to contain the UI. (We will add more flexibility in later versions.)
      * managedLayoutOptions -- These settings are used by all VideoExpress rooms instantiated
      *   by the RoomManager.
      * iceConfig -- This is used by all VideoExpress rooms instantiated by the RoomManager.

      The constructor throws an error if invalid properties are passed in.
      Note that there is an `onError()` method of the `RoomController` instance. See
      "Asynchronous errors" below.
    */
    constructor({
      participantId: string,
      callbackUrl: string,
      container?: string | HTMLElement,
      managedLayoutOptions?: ManagedLayoutOptions // from Video Express
    }): void;

  /*
    Initializes the UI and starts Video Express Plus in the client.
    A host joins the main room. A viewer joins the waiting room or
    (if a waiting room was specified when initiating the RoomManager
    on the server) the main room.
  */
  init(): void;

    /**
      Register a function to handle asynchronous errors.
      See "Asynchronous errors" below.
    */
    onError(callback: function(error: Error)): void;
  }
});
````

### Asynchronous errors

Both the server-side and client-side libraries can have asynchronous errors
resulting from automated actions (such as an error in the RoomManager creating
sessions). The server-side `RoomManager` and the client-side `RoomController`
object both include `onError()` methods that let the developer handle
asynchronous errors.

#### Error.name property values for server-side RoomManager errors

* `MessagingSessionCreationError` -- Error in creating the Video API session to
  be used for messaging.
* `MainRoomSessionCreationError` -- Error in creating the Video API session to
  be used for the main room.
* `BreakoutRoomSessionCreationError` -- Error in creating the Video API session
  to be used for a breakout room.
* `MessagingRoomSignalingError` -- Error in attempting to send a signal to a
  client. This may not be fatal. (The client may have disconnected from the
  network or closed their browser session.)
* `TokenCreationError` -- Error in creating a Video API token.
* `WhiteboardCreationError` -- Error in calling the Vonage whiteboard API.

#### Error.name property values for client-side RoomController errors

* `RoomManagerServerError` -- The server-side RoomManager should forward
  relevant errors to the client (so the client app knows that something is
  awry).
* `RoomManagerCallbackError` -- Error in sending a request to the server
  callback URL.
* `SignalingError` -- Error in sending a Video API signal to other clients.
