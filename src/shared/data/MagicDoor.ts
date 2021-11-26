import { Door } from "../domain";

export class MagicDoor implements Door {
  name: string;

  constructor() {
    this.name = "Magic door";
  }
  room1: any;
  room2: any;
}