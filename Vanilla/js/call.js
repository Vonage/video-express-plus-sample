import { RoomController } from '@vonage/video-express-plus-client';

const urlParams = new URLSearchParams(window.location.search);

const roomController = new RoomController({
  container: 've-plus-container-id',
  participantId: urlParams.get('participantId'),
  callbackUrl: '/api/vve/',
});
roomController.init();
