export type Users = {
  name: string;
  balance: number;
};

export enum LOCATION {
  EUA = "EUA",
  BRAZIL = "BRAZIL"
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN"
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}
export interface Result {
  brazil: any;
  EUA: any;
  brazilians: ResultItem;
  americans: ResultItem;
}

export interface ResultItem {
  allowed: string[];
  unallowed: string[];
}