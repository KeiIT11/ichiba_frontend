"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

interface Cardprops {
  image_src: string;
  card_title: string;
  card_price: number;
  product_id: string;
}

const Card: React.FC<Cardprops> = ({
  image_src,
  product_id,
  card_price,
  card_title,
}) => {
  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product/${product_id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full shadow-lg rounded-lg p-2">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing Image"
            src={image_src}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
        </div>
        <div className="font-semibold text-lg ">{card_title}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold text-red-700">
            {formatter.format(card_price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
