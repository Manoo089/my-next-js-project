import React from "react";

import Image from "next/image";

export default function ProductCard() {
  return (
    <article className="ProductCard">
      <aside className="ProductCard__info">Free Shipping!</aside>
      <header className="ProductCard__header">
        <Image src="/blue_sport_shoes.jpg" alt="" width={"100%"} height={"100%"} />
      </header>
      <main className="ProductCard__main">
        <h3>Asics</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci facere fugit quod illum eligendi
          veritatis autem saepe! Deleniti cumque possimus libero architecto debitis...
        </p>
      </main>
      <footer className="ProductCard__footer"></footer>
    </article>
  );
}