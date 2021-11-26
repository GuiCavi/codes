import { Direction, Door, MapSite, Room } from "../../shared/domain";
// import { MagicMazeFactory } from "./MagicMazeFactory";
import { MazeFactory } from "./MazeFactory";
import { StandardMazeFactory } from "./StandardMazeFactory";

export class Client {
  factory: MazeFactory;

  run() {
    this.factory = new StandardMazeFactory();

    const maze = this.factory.createMaze();

    const r1: Room = this.factory.createRoom(1);
    const r2: Room = this.factory.createRoom(2);
    const door: Door = this.factory.createDoor(r1, r2);

    r1.setSide(Direction.NORTH, this.factory.createWall());
    r1.setSide(Direction.SOUTH, this.factory.createWall());
    r1.setSide(Direction.EAST, door);
    r1.setSide(Direction.WEST, this.factory.createWall());

    r2.setSide(Direction.NORTH, this.factory.createWall());
    r2.setSide(Direction.SOUTH, this.factory.createWall());
    r2.setSide(Direction.WEST, door);
    r2.setSide(Direction.EAST, this.factory.createWall());

    maze.addRoom(r1);
    maze.addRoom(r2);

    console.log(JSON.stringify(maze, null, 2));
  }
}