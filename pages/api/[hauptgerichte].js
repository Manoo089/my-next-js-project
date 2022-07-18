import {products} from "../../data/products";

export default function handler({query: {category}}, res) {
    const hauptgerichte = products.filter(product => 
        product.category === "Hauptgericht");

}