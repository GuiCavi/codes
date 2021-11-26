import { Maze, Door, Wall, Room, Direction } from "../../shared/domain";
import { IRunner } from "../../shared/runner/Runner";
import { MazeBuilder } from "./MazeBuilder";
import { StandardMazeBuilder } from "./StandardMazeBuilder";

class MazeGame {
  createMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();
    builder.buildRoom(1);
    builder.buildRoom(2);

    builder.buildDoor(1, 2);

    return builder.build();
  }
}

export class Runner implements IRunner {
  run(): void {
    const builder: MazeBuilder = new StandardMazeBuilder();
    const mazeGame: MazeGame = new MazeGame();

    const maze = mazeGame.createMaze(builder);

    console.log(JSON.stringify(maze, null, 2));
  }
}