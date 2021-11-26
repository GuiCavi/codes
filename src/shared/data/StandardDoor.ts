import { Door, Room } from "../domain";

export class StandardDoor implements Door {
  name: string;

  constructor(r1: Room, r2: Room) {
    this.name = "Standard door";
  }
  room1: any;
  room2: any;
}