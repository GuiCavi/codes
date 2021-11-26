import { MapSite, Room } from ".";

export interface Maze {
  sites: MapSite[]

  addRoom(room: Room): void;
  getRoom(roomNumber: number): Room;
}