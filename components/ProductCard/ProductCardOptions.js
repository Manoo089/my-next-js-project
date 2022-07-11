import React from "react";

import Button from "../Button/Button";
import Select from "../Select/Select";

export default function ProductCardOptions() {
    return (
        <article className="ProductCardOptions">
            <header className="ProductCardOptions__price">
                <h3>$65 USD</h3>
            </header>

            <main className="ProductCardOptions__selects">
                <Select label="Size" id="size" />
                <Select label="Quantity" id="quantity" />

                <div className="ProductCardOptions__colors">
                    <label htmlFor="ProductCardOptions__color">Colors:</label>
                    <div className="ProductCardOptions__colors--blue"></div>
                    <div className="ProductCardOptions__colors--red"></div>
                    <div className="ProductCardOptions__colors--black"></div>
                </div>
            </main>
            <Button label="Add to Cart" onClick={() => console.log("ProductCard Button wurde geklickt!")} />
        </article>
    )
};