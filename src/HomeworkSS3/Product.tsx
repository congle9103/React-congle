import React from "react";

type TProductItem = {
  img: string;
  title: string;
  price: number;
  discountPrice?: number;
  percentPrice?: number;
};

const ProductItem = ({
  img,
  title,
  price,
  discountPrice = 0,
  percentPrice = 0,
}: TProductItem) => {
  {
    percentPrice > 0
      ? (discountPrice = price - (price * percentPrice) / 100)
      : null;
  }
  return (
    <>
      <div className="relative inline-block">
        <img className="h-40 w-32" src={img} alt="" />
        {percentPrice > 0 ? (
          <div className="text-white bg-orange-600 rounded absolute top-0 right-0 px-2 py-1">
            -{percentPrice}%
          </div>
        ) : null}
      </div>

      <div className="w-32 font-bold">{title}</div>
      <div className="flex">
        {discountPrice > 0 ? (
          <div className="mr-2 text-red-600 font-semibold">{discountPrice}</div>
        ) : null}

        {discountPrice > 0 ? (
          <div className="font-semibold text-gray-500 line-through">
            {price}
          </div>
        ) : (
          <div className="font-semibold text-red-600">{price}</div>
        )}
      </div>
    </>
  );
};

const Product = () => {
  return (
    <div className="flex">
        <div className="grid">
        <ProductItem
        img="./imgs/usb.jpg"
        title="Cáp chuyển đổi USB-C sang SD"
        price={1290000}
        percentPrice={25}
        />
        </div>

        <div className="grid">
        <ProductItem
        img="./imgs/usb.jpg"
        title="Cáp chuyển đổi USB-C sang SD"
        price={1290000}
        />
        </div>
    </div>
  );
};

export default Product;
