export interface Content {
  id? : string;
  poster: string;
  title: string;
  genres: string[];
  plot: string;
  tags: string[];
  releaseDate: Date | null;
  actors: Actor[];
  seasons: Season[];
  seasonCount:number;
  director:string;
  lastUpdate:Date;
  type: "movie" | "series";
  isPublished:false
}
export interface Actor {
  profile: string;
  name: string;
}
export interface Episode {
  number: number;
  title: string;
  poster:string;
  description: string;
}

export interface Season {
  number: number;
  description: string;
  poster:string;
  episodeCount: number;
  episodes: Episode[];
}
