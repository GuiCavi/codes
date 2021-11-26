import { BrickWall, StandardDoor, StandardMaze, StandardRoom } from "../../shared/data"
import { Door, Maze, Room, Wall } from "../../shared/domain"
import { MazeFactory } from "./MazeFactory"

export class StandardMazeFactory implements MazeFactory {
  createMaze(): Maze {
    return new StandardMaze();
  }
  createRoom(roomNumber: number): Room {
    return new StandardRoom(roomNumber);
  }
  createWall(): Wall {
    return new BrickWall();
  }
  createDoor(r1: Room, r2: Room): Door {
    return new StandardDoor(r1, r2);
  }
}