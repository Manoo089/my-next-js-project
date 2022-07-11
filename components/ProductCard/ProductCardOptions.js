import React from "react";

import Button from "../Button/Button";

export default function ProductCardOptions() {
    return (
        <article className="ProductCardOptions">
            <header className="ProductCardOptions__price">
                <h3>$65 USD</h3>
            </header>

            <main className="ProductCardOptions__selects">
                <div className="ProductCardOptions__select">
                    <label htmlFor="ProductCardOptions__selects--size">Size:</label>
                        <select className="ProductCardOptions__select--size">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                </div>

                <div className="ProductCardOptions__select">
                    <label htmlFor="ProductCardOptions__selects--quantity">Quantity:</label>
                        <select className="ProductCardOptions__select--quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                </div>

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