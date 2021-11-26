import { MapSite } from ".";

export interface Door extends MapSite {
  name: string;
  room1: Room;
  room2: Room;
}