//return top selling by using rankingAPI filterd by genraID
export const fetchTopSelling = (genraID: number) => {
    //Temporarily showing example, replace this code.
    const topSelling: ReccomendedItemInfo = {
        itemCode: "kaguin:10084487",
        imgUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/alude/cabinet/kagu/kagu03/ja1566.jpg?_ex=128x128",
        // imgUrl: "/photo-1606107557195-0e29a4b5b4aa.jpeg",
        genraID: "566180",
        genraName: "ソファ"
    }
    return (
        topSelling
    );
}