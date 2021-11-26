import { BrickWall, MagicDoor } from "../../shared/data"
import { Door, Maze, Room, Wall } from "../../shared/domain"
import { MazeFactory } from "./MazeFactory"

export class MagicMazeFactory implements MazeFactory {
  createMaze(): Maze {
    throw new Error("Method not implemented.")
  }
  createRoom(): Room {
    throw new Error("Method not implemented.")
  }
  createWall(): Wall {
    return new BrickWall()
  }
  createDoor(): Door {
    return new MagicDoor()
  }
}