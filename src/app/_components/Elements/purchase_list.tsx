"use client";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import AddToCartButton from "./add_to_cart";
import cart from "@../../../public/addToCart.png";
import Image from "next/image";

const RecommendationList = () => {
  const [option, setOption] = useState(0);

  const options = useMemo(
    () => [
      [
        { id: 1, name: "スーツ", checked: true },
        { id: 2, name: "メンズ財布", checked: false },
        { id: 3, name: "ハンカチ・ハンドタオル", checked: false },
        { id: 4, name: "名刺入れ", checked: false },
        // others
      ],
      [
        { id: 1, name: "テレビ", checked: false },
        { id: 2, name: "ソファ", checked: false },
        { id: 3, name: "脚付きマットレス", checked: false },
        { id: 4, name: "センターテーブル・ローテーブル", checked: false },
        // others
      ],
      [
        { id: 1, name: "洗濯機", checked: false },
        { id: 2, name: "フレーム・マットレスセット", checked: false },
        { id: 3, name: "ダイニングテーブル", checked: false },
        { id: 4, name: "冷蔵庫", checked: false },
        // others
      ],
      [
        { id: 1, name: "パソコンデスク", checked: false },
        { id: 2, name: "オフィスチェア", checked: false },
        { id: 3, name: "ディスプレイ", checked: false },
        { id: 4, name: "ヘッドホン・イヤホン", checked: false },
      ],
    ],
    []
  );

  const [shoppingList, setShoppingList] = useState(options[option]);

  const [selectedItems, setSelectedItems] = useState(
    options[option].filter((item) => item.checked)
  );

  useEffect(() => {
    setShoppingList(options[option]);
    setSelectedItems(options[option].filter((item) => item.checked));
  }, [option, options]);

  const handleCheckboxChange = (index: number) => {
    const updatedList = [...shoppingList];

    // Use index to update the checked prop. accordingly
    updatedList[index] = {
      ...updatedList[index],
      checked: !updatedList[index].checked,
    };

    setShoppingList(updatedList);

    // Update the checked items
    const selected = updatedList.filter((item) => item.checked);
    setSelectedItems(selected);
  };

  const router = useRouter();

  const handleAddToCart = () => {
    // construct the query parameter string to redirect to cart page
    const queryParams = selectedItems
      .map((item) => `item=${item.name}`)
      .join("&");
    const url = `/cart?${queryParams}`;

    router.push(url);
  };

  return (
    <div>
      <select
        onChange={(e) => setOption(parseInt(e.target.value))}
        value={option}
      >
        <option value={0}>New Grads</option>
        <option value={1}>Moving to new place</option>
        <option value={2}>Getting Maried</option>
        <option value={3}>Remote Worker</option>
      </select>

      <table>
        <tbody>
          {shoppingList.map((item, index) => (
            <tr key={index}>
              <td
                className="flex items-center justify-between min-h-[100px] bg-neutral-300 shadow-lg rounded-lg text-lg font-semibold p-2 hover:scale-105 cursor-pointer transition-all"
                onClick={() => router.push(`/category/${index}`)}
              >
                {item.name}
              </td>
              <td></td> {/* 中间留空 */}
              <td>
                <input
                  type="checkbox"
                  checked={item.checked}
                  className="mr-2"
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddToCartButton onClick={handleAddToCart} />
    </div>
  );
};

export default RecommendationList;
