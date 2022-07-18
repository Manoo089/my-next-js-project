import React from "react";
import jsondb from "../../jsondb/products";
import Grid from "../../components/Grid/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Hauptgerichte() {
  const filtered = jsondb.products.filter(x => {
    return x.category === "Hauptgericht";
  });

  return (
    <Grid>
      {filtered.map((product, index) => {
        const { name, image, specialOffer, price, quantity, sizes, description } = product;
        return (
          <ProductCard
            key={index}
            name={name}
            image={image}
            specialOffer={specialOffer}
            price={price}
            productSize={sizes}
            productQuantity={quantity}
            description={description}
          />
        );
      })}
    </Grid>
  );
}
