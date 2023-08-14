import { Genre } from "./Genre";
import { Studio } from "./Studio";

export interface Movie {
  id?: number
  GenreId: number | null
  StudioId: number
  name: string
  yearReleased: number
  Genre?: Genre
  Studio?: Studio
}
