import React from "react";
import { jsondb } from "../../jsondb/products";
import ProductCardOptions from "./ProductCardOptions";


// const data = [
//   {
//     id: 1,
//     category: "Shoes",
//     manufacturer: "Asics",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere fugit quod illum eligendi veritatis autem saepe! Deleniti cumque possimus libero architecto debitis...",
//     specialOffer: "Free Shipping",
//     image: "blue_sport_shoes.jpg",
//     alt: "Sport Shoes",
//     price: "$65 USD",
//     sizes: ["40", "41", "42"],
//     quantity: 8,
//     colors: ["blue", "red", "black"],
//   },
// ];

export default function ProductCard() {
   const data = jsondb.products;
  return (
    <>
      {data.map(product => {
        return (
          <article className="ProductCard" key={product.name}>
            <aside className="ProductCard__info"></aside>
            <header className="ProductCard__header">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ProductCard__image" src={`/${product.image}`} alt={product.name} />
            </header>
            <main className="ProductCard__main">
              <h2>{product.name}</h2>
              <p className="ProductCard__main--description">{product.description}</p>
            </main>
            <footer className="ProductCard__footer">
              {/* <ProductCardOptions value={product.colors} price={product.price} productSize={product.sizes} productQuantity={product.quantity} /> */}
            </footer>
          </article>
        );
      })}
    </>
  );
};