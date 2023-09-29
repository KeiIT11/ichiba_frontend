//This is infomation of individual items.
//used in Individual Product Page.

//fetched from item Search API using itemCode.

interface IndividualItemInfo {
    itemCode: string;
    imgUrl: string;
    ProductName: string;
    itemPrice: number; //api seems returns string and sometimes returns number. hmm
    itemCaption: string;

    genraID: string;
    genraName: string;

    reviewAverage: number;
    reviewCount: number;
}