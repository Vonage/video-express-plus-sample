import { RoomController } from "@vonage/video-express-plus-client";

const roomController = new RoomController({
  container: "ve-plus-container-id", //<VVE+ContainerID>
  participantId: "",
  callbackUrl: "/api/vve/",
});
roomController.init(); // initialzation
