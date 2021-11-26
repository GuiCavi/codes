import { Door, Maze, Room, Wall } from "../../shared/domain";

export interface MazeFactory {
  createMaze(): Maze;
  createDoor(r1: Room, r2: Room): Door;
  createWall(): Wall;
  createRoom(roomNumber: number): Room;
}