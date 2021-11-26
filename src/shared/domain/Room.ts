import { Direction, MapSite } from ".";

export interface Room extends MapSite {
  roomNumber: number;
  sides: MapSite[];

  setSide(direction: Direction, site: MapSite): void;
  getSide(direction: Direction): MapSite;
}