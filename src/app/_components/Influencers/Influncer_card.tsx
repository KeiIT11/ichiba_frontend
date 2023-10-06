import Image from "next/image";
import React from "react";

interface Influencer_card_props {
  image_url: string;
  title_name: string;
}

const Influncer_card: React.FC<Influencer_card_props> = ({
  image_url,
  title_name,
}) => {
  return (
    <div className="min-h-[100px] p-4 shadow-lg rounded-lg   flex items-center justify-start gap-4">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <Image alt="Influencer image" src={image_url} width={96} height={80} />
        </div>
      </div>
      <div className="font-bold text-xl pl-2" >{title_name}</div>
    </div>
  );
};

export default Influncer_card;
