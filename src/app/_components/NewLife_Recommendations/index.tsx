import React from "react";
import Catgory_card from "./Catgory_card";
import { montserrat } from "@/app/_utils/fonts";

const Newlife = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[100vw] min-h-[40vh] shadow-md m-2 p-2 px-32">
      <span className={`text-2xl font-bold ${montserrat.className}`}>
        New life goods Recommendations
      </span>
      <hr className="my-2 w-20 h-[2px] bg-gray-800 rounded border-0 md:my-2 dark:bg-gray-300"></hr>
      <div className="py-1"></div>
      <div className="flex flex-col gap-2 justify-start space-y-1">
        <Catgory_card
          card_title="Interior"
          card_items={["冷蔵庫", "テレビ", "洗濯機"]}
        />
        <div className="py-1"></div>
        <Catgory_card
          card_title="Health and Wellness"
          card_items={["トレッドミル", "ダンベル"]}
        />
        <div className="py-1"></div>
        <Catgory_card
          card_title="Home Office"
          card_items={["デスク", "椅子", "ラップトップ", "プリンター"]}
        />
        <div className="py-1"></div>
        <Catgory_card
          card_title="Electronics and Gadgets"
          card_items={["スマートフォン", "カメラ", "アクセサリー"]}
        />
      </div>
    </div>
  );
};

export default Newlife;
