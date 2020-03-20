import axios from "axios";
import { API_ENDPOINTS } from "../constants/api-config"

interface BookInstancesResponse {
  bookinstances: any;
}

interface BookInstanceDetailsResponse {
  bookinstance: any;
}

export async function getAllBookInstances(): Promise<BookInstancesResponse> {
  return await axios.get(API_ENDPOINTS.BOOK_INSTANCES);
}

export async function getBookInstanceDetails(id: string): Promise<BookInstanceDetailsResponse> {
  return await axios.get(API_ENDPOINTS.BOOK_INSTANCE_DETAILS.replace(":id", id));
}
