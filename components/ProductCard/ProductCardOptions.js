import React from "react";

import Button from "../Button/Button";
import Select from "../Select/Select";

export default function ProductCardOptions({ price, productSize, productQuantity }) {
  const handleOnChange = e => {
    console.log(e.target.value);
  };

  const quantityCount = x => {
    const arr = [];
    if (x >= 1) {
      for (let i = 1; i <= x; i++) {
        arr.push(i);
      }
      return arr;
    }
  };

  const formatterPrice = price => {
    return price.toFixed(2);
  };

  return (
    <article className="ProductCardOptions">
      <header className="ProductCardOptions__price">
        <h3>{formatterPrice(price)} €</h3>
      </header>

      <main className="ProductCardOptions__selects">
        <Select id="size" sized productSize={productSize} onChange={handleOnChange} />
        <Select
          id="quantity"
          quantity
          productQuantity={quantityCount(productQuantity)}
          onChange={handleOnChange}
        />
      </main>
      
      <footer>
        <Button label="Add to Cart" onClick={() => console.log("ProductCard Button wurde geklickt!")} />
      </footer>
    </article>
  );
}
