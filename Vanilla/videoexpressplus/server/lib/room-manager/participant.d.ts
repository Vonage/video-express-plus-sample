import { IParticipant } from "../types";
declare class Participant implements IParticipant {
    audioMuted: boolean;
    breakoutRoomToken: string | undefined;
    activeRoomId: string | undefined;
    id: string;
    participantId: string;
    host: boolean;
    banned: boolean | undefined;
    mainRoomToken: string;
    messagingSessionToken: string;
    name: string;
    constructor(id: string, name: string, isHost: boolean, mainRoomToken: string, messagingSessionToken: string, audioMuted?: boolean, participantId?: string);
    ban(): void;
    isBanned(): boolean | undefined;
    isHost(): boolean;
    promoteToHost(): void;
    setActiveRoom(roomId: string): void;
    setParticipantId(participantId: string): void;
    getParticipantId(): string;
}
export default Participant;
