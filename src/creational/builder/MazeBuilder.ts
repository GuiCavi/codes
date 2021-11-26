import { Door, Maze, Room, Wall } from "../../shared/domain";

export interface MazeBuilder {
  buildMaze(): void;
  buildDoor(roomFrom: number, roomTo: number): void;
  buildWall(): void;
  buildRoom(roomNumber: number): void;

  build(): Maze;
}