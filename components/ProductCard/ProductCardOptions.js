import React from "react";

import Button from "../Button/Button";
import Select from "../Select/Select";
import RadioGroupColor from "../RadioGroupColor/RadioGroupColor";

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

  return (
    <article className="ProductCardOptions">
      <header className="ProductCardOptions__price">
        <h3>{price}</h3>
      </header>

      <main className="ProductCardOptions__selects">
        <Select id="size" sized productSize={productSize} onChange={handleOnChange} />
        <Select
          id="quantity"
          quantity
          productQuantity={quantityCount(productQuantity)}
          onChange={handleOnChange}
        />

        { /* ********** TODO generic ********** */}
        <div className="ProductCardOptions__colors">
          <label htmlFor="ProductCardOptions__color">Colors:</label>
          <div className="ProductCardOptions__colors--blue"></div>
          <div className="ProductCardOptions__colors--red"></div>
          <div className="ProductCardOptions__colors--black"></div>
          <RadioGroupColor />
        </div>
      </main>
      <Button label="Add to Cart" onClick={() => console.log("ProductCard Button wurde geklickt!")} />
    </article>
  );
};