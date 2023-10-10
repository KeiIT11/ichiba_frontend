export interface Influencer_list {
  name: string;
  image_url: string;
}

export interface Iinfluencer {
  [key: string]: {
    name: string,
    imageURL: string,
    forWhom: string,
    introductionText: string,
    conclusionText: string,
    recommendItems: Iinfluencer_recommendItem[]
  }
}

export interface Iinfluencer_recommendItem {
  productId: string,
  itemExplanation: string,
}