import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-config"

interface AuthorsResponse {
  authors: any;
}

interface AuthorDetailsResponse {
  author: any;
}

export async function getAllAuthors(): Promise<AuthorsResponse> {
  //await new Promise(resolve => setTimeout(resolve, 5000));
  return await axios.get(API_ENDPOINTS.AUTHORS);
}

export async function getAuthorDetails(id: string): Promise<AuthorDetailsResponse> {
  //await new Promise(resolve => setTimeout(resolve, 5000));
  return await axios.get(API_ENDPOINTS.AUTHOR_DETAILS.replace(":id", id));
}
