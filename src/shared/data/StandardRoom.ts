import { Direction, MapSite, Room } from "../domain";

export class StandardRoom implements Room {
  roomNumber: number;
  sides: MapSite[];

  constructor(roomNumber: number) {
    this.roomNumber = roomNumber;
    this.sides = [];
  }

  setSide(direction: Direction, site: MapSite): void {
    this.sides[direction] = site;
  }

  getSide(direction: Direction): MapSite {
    return this.sides[direction]
  }
}