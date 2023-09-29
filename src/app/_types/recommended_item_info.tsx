//This is infomation of recommended items.
//used in HomePage and Recommendation Page.

//fetched from ranking API using genraID.

//recommended items have less information,
//because it's displayed genraName on image.

interface ReccomendedItemInfo {
    itemCode: string;
    imgUrl: string;
    genraID: string;
    genraName: string;
}