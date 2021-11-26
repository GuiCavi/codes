import { BrickWall, StandardDoor, StandardMaze, StandardRoom } from "../../shared/data";
import { Maze, Room, Direction, Door, Wall } from "../../shared/domain";
import { MazeBuilder } from "./MazeBuilder";

export class StandardMazeBuilder implements MazeBuilder {
  currentMaze: Maze;

  buildMaze(): void {
    this.currentMaze = new StandardMaze();
  }

  buildDoor(roomFrom: number, roomTo: number): void {
    const room1 = this.currentMaze.getRoom(roomFrom);
    const room2 = this.currentMaze.getRoom(roomTo);
    const door = new StandardDoor(room1, room2);

    room1.setSide(this.commonWall(room1, room2), door);
    room2.setSide(this.commonWall(room2, room1), door);
  }

  buildWall(): void {
    throw new Error("Method not implemented.");
  }

  buildRoom(roomNumber: number): void {
    if (!this.currentMaze.getRoom(roomNumber)) {
      const room: Room = new StandardRoom(roomNumber);
      this.currentMaze.addRoom(room);

      room.setSide(Direction.NORTH, new BrickWall());
      room.setSide(Direction.SOUTH, new BrickWall());
      room.setSide(Direction.EAST, new BrickWall());
      room.setSide(Direction.WEST, new BrickWall());
    }
  }

  build(): Maze {
    return this.currentMaze;
  }

  private commonWall(r1: Room, r2: Room): Direction {
    return Direction.EAST;
  }
}