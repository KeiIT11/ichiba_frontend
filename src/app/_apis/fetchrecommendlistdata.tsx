import axios, { AxiosResponse } from "axios";
import { RecommendationApiResponse } from "@/app/_types/recommendation_list_types";

export const fetchrecommendationdata = async (
  id: number
): Promise<RecommendationApiResponse | undefined> => {
  try {
    const response: AxiosResponse<RecommendationApiResponse> = await axios.get(
      `http://127.0.0.1:8000/products/recommended-list/${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
};
