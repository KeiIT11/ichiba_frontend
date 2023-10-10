import { fetchProductData } from "../_apis/fetchparticularproduct";
import { Iinfluencer_recommendItem } from "../_types/influencer_list_info";

interface IParams {
    productid: string;
}
interface ApiResponse {
    GenreInformation: {
        children: any[];
        current: any[];
        parent: any[];
    };
    Products: {
        Product: {
            genreName: string;
            productName: string;
            productCaption: string;
            mediumImageUrl: string;
            averagePrice: number;
            itemCount: number;
            reviewAverage: number;
            productUrlPC: string;
        };
    }[];
}

export const getAllInfluencerRecommendations = (recommendItems: Array<Iinfluencer_recommendItem>) => {
    const recommendationItemsInformation: Array<ApiResponse> = []
    //get all persona items information by use mapping and roop.
    //Temporarily showing example, replace this code.
    const Iparam: IParams = { productid: "" }
    recommendItems.map(async recommendItem => {
        const Iparam: IParams = { productid: recommendItem.productId }
        const temp = await fetchProductData(Iparam)
        recommendationItemsInformation.push(temp)
    })
    console.log(recommendationItemsInformation)
    return (
        recommendationItemsInformation
    );
}