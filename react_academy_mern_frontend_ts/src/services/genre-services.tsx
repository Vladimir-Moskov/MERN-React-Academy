import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-config"

interface GenresResponse {
  genres: any;
}

interface GenreDetailsResponse {
  genre: any;
}

export async function getAllGenres(): Promise<GenresResponse> {
  return await axios.get(API_ENDPOINTS.GENERS);
}

export async function getGenreDetails(id: string): Promise<GenreDetailsResponse> {
  return await axios.get(API_ENDPOINTS.GENER_DETAILS.replace(":id", id));
}
