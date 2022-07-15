import React from "react";
import jsondb from "../../jsondb/products";
import ProductCardOptions from "./ProductCardOptions";
import Grid from "../Grid/Grid";

export default function ProductCard() {
  return (
    <>
      <Grid>
        {jsondb.products.map(product => {
          return (
            <article className="ProductCard" key={product.name}>
              {product.specialOffer && <aside className="ProductCard__info">{product.specialOffer}</aside>}

              <header className="ProductCard__header">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="ProductCard__image" src={`${product.image}`} alt={product.name} />
              </header>
              <main className="ProductCard__main">
                <h2 className="ProductCard__main--product">{product.name}</h2>
                <p className="ProductCard__main--description">{product.description}</p>
              </main>
              <footer className="ProductCard__footer">
                <ProductCardOptions
                  price={product.price}
                  productSize={product.sizes}
                  productQuantity={product.quantity}
                />
              </footer>
            </article>
          );
        })}
      </Grid>
    </>
  );
}
