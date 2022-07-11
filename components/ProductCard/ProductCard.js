import React from "react";

import ProductCardOptions from "./ProductCardOptions";

export default function ProductCard() {
  return (
    <article className="ProductCard">
      <aside className="ProductCard__info">Free Shipping!</aside>
      <header className="ProductCard__header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ProductCard__image" src="/blue_sport_shoes.jpg" alt="" />
      </header>
      <main className="ProductCard__main">
        <h2>Asics</h2>
        <p className="ProductCard__main--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere fugit quod illum eligendi
          veritatis autem saepe! Deleniti cumque possimus libero architecto debitis...
        </p>
      </main>
      <footer className="ProductCard__footer">
        <ProductCardOptions />
      </footer>
    </article>
  );
}
