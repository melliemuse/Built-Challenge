export enum MovieId {
  F001 = "F001",
  F002 = "F002",
}

export enum MovieCode {
  SCIFI = "scifi",
  COMEDY = "comedy",
  BMOVIE = "bMovie",
  DRAMEDY = "dramedy",
  BLUERAY = "blueray",
  THREED = "3D"
}

export enum PremiumGenres {
  COMEDY = "comedy",
  DRAMEDY = "dramedy",
  BLUERAY = "blueray",
  THREED = "3D"
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
