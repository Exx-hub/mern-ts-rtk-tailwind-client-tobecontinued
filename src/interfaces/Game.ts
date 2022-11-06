export interface Game {
  name: string;
  address: string;
  numberOfPeople: number;
  date: Date;
  time: string;
  fieldNumber: number;
  _id: string;
}

export interface CreateGameInfo {
  name: string;
  address: string;
  numberOfPeople: number;
  fieldNumber: number;
}
