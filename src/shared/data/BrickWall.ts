import { Wall } from "../domain";

export class BrickWall implements Wall {
  name: string;

  constructor() {
    this.name = "Brick wall";
  }
}