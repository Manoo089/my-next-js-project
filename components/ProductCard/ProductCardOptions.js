import React from "react";

export default function ProductCardOptions() {
    return (
        <article className="ProductCardOptions">
            <header className="ProductCardOptions__price">
                <h3>$65 USD</h3>
            </header>

            <main className="ProductCardOptions__selects">
                <div>
                    <label htmlFor="ProductCardOptions__selects--size">Size:</label>
                        <select id="ProductCardOptions__selects--size">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                </div>

                <div>
                    <label htmlFor="ProductCardOptions__selects--quantity">Quantity:</label>
                        <select id="ProductCardOptions__selects--quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                </div>

                <div>
                    <label htmlFor="ProductCardOptions__selects--colors">Colors:</label>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </main>
        </article>
    )
}