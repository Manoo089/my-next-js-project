import React from "react";
import ProductCardOptions from "./ProductCardOptions";

export default function ProductCard({ description, name, image, price, specialOffer, productSize, productQuantity }) {
  return (
    <article className="ProductCard">
      {specialOffer && <aside className="ProductCard__info">{specialOffer}</aside>}

      <header className="ProductCard__header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ProductCard__image" src={`${image}`} alt={name} />
      </header>
      <main className="ProductCard__main">
        <h2 className="ProductCard__main--product">{name}</h2>
        <p className="ProductCard__main--description">{description}</p>
      </main>
      <footer className="ProductCard__footer">
        <ProductCardOptions price={price} productSize={productSize} productQuantity={productQuantity} />
      </footer>
    </article>
  );
}
