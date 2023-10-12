import axios, { AxiosResponse } from "axios";
import { InfluencerApiResponse } from "@/app/_types/influencer_detail_types";

export const fetchinfluencerdetails = async (
  id: number
): Promise<InfluencerApiResponse | undefined> => {
  try {
    const response: AxiosResponse<InfluencerApiResponse> = await axios.get(
      `http://127.0.0.1:8000/products/influencers/${id}/product-recommendations/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};
