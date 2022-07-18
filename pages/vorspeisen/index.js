import jsondb from "../../jsondb/products";
import Grid from "../../components/Grid/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Vorspeisen() {
  const filtered = jsondb.products.filter(x => {
    return x.category === "Vorspeise";
  });

  return (
   <h2>Vorspeisen</h2>
  );
}
