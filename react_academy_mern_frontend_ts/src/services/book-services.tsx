import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-config"

interface BooksResponse {
  books: any;
}

interface BookDetailsResponse {
  book: any;
}

export async function getAllBooks(): Promise<BooksResponse> {
  //await new Promise(resolve => setTimeout(resolve, 5000));
  return await axios.get(API_ENDPOINTS.BOOKS);
}

export async function getBookDetails(id: string): Promise<BookDetailsResponse> {
   //await new Promise(resolve => setTimeout(resolve, 5000));
  return await axios.get(API_ENDPOINTS.BOOK_DETAILS.replace(":id", id));
}
