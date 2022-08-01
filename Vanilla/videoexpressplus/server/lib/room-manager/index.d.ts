import OpenTok from 'opentok';
import { IClientRequestBody, IParticipant } from '../types';
declare class RoomManager {
    applicationId: string;
    apiSecret: string;
    apiKey: string;
    opentok: OpenTok;
    hasBreakoutRooms?: boolean;
    hasWaitingRoom?: boolean;
    hasWhiteboard?: boolean;
    store: Map<string, any>;
    pstore: Map<string, IParticipant>;
    constructor(apiKey: string, apiSecret: string, applicationId: string, hasBreakoutRooms: boolean, hasWaitingRoom: boolean, hasWhiteboard: boolean);
    /**
   *
   * @param {*} options
   * @param {*} callback
   * @returns
   */
    createRoom(callback: any): any;
    /**
   * Adds a participant.
   *
   * @param {*} name - The name to display in the UI.
   *            This need not be unique.
   * @param {*} isHost - (optional) Whether the participant
   *            is (initially) a host. Any participant can
   *            later be promoted to a host.)
   * @param {*} id - (optional) The unique ID for the participant.
   *            If you do not specify an ID, a unique ID will be
   *            assigned. The developer may want to specify the participant ID
   *            if they have their own user identity records. That way, they
   *            can use this ID and look up users by their identifiers
   *            when they call getParticipantInfo().
   */
    addParticipant(name: string, isHost: boolean, id: string): void;
    /**
   *
   * @param {*} id - Unique Id of Participant
   */
    getParticipant(idOrName: string): IParticipant | undefined;
    /**
   * Handle Client Events
   * @param requestBody
   * @returns
   */
    handleClientEvent(requestBody: IClientRequestBody): Promise<any>;
}
export default RoomManager;
