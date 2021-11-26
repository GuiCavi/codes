import { Maze, Room } from "../domain";

export class StandardMaze implements Maze {
  sites: Room[];

  constructor() {
    this.sites = [];
  }

  addRoom(room: Room): void {
    this.sites.push(room);
  }
  getRoom(roomNumber: number): Room {
    return this.sites[roomNumber];
  }

}