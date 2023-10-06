import { Popular_item } from "@/app/_types/popular_item_types";
import axios from "axios";

export async function fetachpopularitems(): Promise<Popular_item[]> {
  try {
    const response = await axios.get<Popular_item[]>(
      "http://127.0.0.1:8000/products/popular_items/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
