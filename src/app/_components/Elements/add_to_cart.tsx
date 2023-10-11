import React, { useState } from "react";
import Image from "next/image";
import cart from "@../../../public/addToCart.png";

const AddToCartButton: React.FC<{
  onClick: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClick }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className="add-to-cart-icon">
      <Image
        src={cart}
        alt="Add to Cart"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`cursor-pointer ${showTooltip ? "hover:scale-105" : ""}`}
      ></Image>
      {showTooltip && <div className="tooltip">Add to Cart</div>}
    </div>
  );
};

export default AddToCartButton;
