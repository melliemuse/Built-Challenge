export enum MovieId {
  F001 = "F001",
  F002 = "F002",
}

export enum MovieCode {
  SCIFI = "scifi",
  COMEDY = "comedy",
  BMOVIE = "bMovie"
}

interface MovieDetails {
  title: string;
  code: MovieCode;
  isNew: boolean;
  isPremium: boolean;
}

export type MovieCollection = {
  [MovieID in MovieId]: MovieDetails;
};
