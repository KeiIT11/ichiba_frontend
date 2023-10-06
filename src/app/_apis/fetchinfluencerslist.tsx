import { Influencer_list } from "@/app/_types/influencer_list_info";
import axios from "axios";

export async function getlistofinfluencers(): Promise<Influencer_list[]> {
  try {
    const response = await axios.get<Influencer_list[]>(
      "http://127.0.0.1:8000/products/influencers/"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
