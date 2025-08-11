"use client";
import { useState, type FC } from "react";
import scss from "./Cards.module.scss";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
  storeName: string;
  storeLogo: string;
  storeColor: string; // цвет для рамки или фона
}

const products: Product[] = [
  {
    id: 1,
    title: "Красовки Nike Air",
    price: 120,
    img: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    storeName: "SportShop",
    storeLogo:
      "https://substackcdn.com/image/fetch/$s_!XD-J!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F67979fc2-9bc6-4ef1-a91a-9f8129c57645_1500x1500.jpeg",
    storeColor: "#FF4500",
  },
  {
    id: 2,
    title: "Джинсы Levi's",
    price: 80,
    img: "https://lsco.scene7.com/is/image/lsco/005010162-dynamic1-pdp-lse?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
    storeName: "DenimStore",
    storeLogo:
      "https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-jeans-logo-wear-logo-thsirt-logo-j-logo-png-image_1532448.jpg",
    storeColor: "#0047AB",
  },
  // другие товары...
];

const Cards: FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <section className={scss.Cards}>
      <div className="container">
        <div className={scss.content}>
          {products.map((product) => (
            <div
              key={product.id}
              className={scss.card}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={scss.imgWrapper}>
                <img src={product.img} alt={product.title} />
                <button className={scss.quickViewBtn}>Quick View</button>
              </div>
              <h3 className={scss.title}>{product.title}</h3>
              <p className={scss.price}>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
