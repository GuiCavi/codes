import { Direction, Door, MapSite, Maze, Room } from "../../shared/domain";
import { IRunner } from "../../shared/runner/Runner";
// import { MagicMazeFactory } from "./MagicMazeFactory";
import { MazeFactory } from "./MazeFactory";
import { StandardMazeFactory } from "./StandardMazeFactory";

class MazeGame {
  createMaze(factory: MazeFactory): Maze {
    const maze = factory.createMaze();

    const r1: Room = factory.createRoom(1);
    const r2: Room = factory.createRoom(2);
    const door: Door = factory.createDoor(r1, r2);

    r1.setSide(Direction.NORTH, factory.createWall());
    r1.setSide(Direction.SOUTH, factory.createWall());
    r1.setSide(Direction.EAST, door);
    r1.setSide(Direction.WEST, factory.createWall());

    r2.setSide(Direction.NORTH, factory.createWall());
    r2.setSide(Direction.SOUTH, factory.createWall());
    r2.setSide(Direction.WEST, door);
    r2.setSide(Direction.EAST, factory.createWall());

    maze.addRoom(r1);
    maze.addRoom(r2);

    return maze;
  }
}

export class Runner implements IRunner {
  run() {
    const mazeFactory: MazeFactory = new StandardMazeFactory()
    const mazeGame: MazeGame = new MazeGame()
    const maze = mazeGame.createMaze(mazeFactory)

    console.log(JSON.stringify(maze, null, 2));
  }
}