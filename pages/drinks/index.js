import Grid from "../../components/Grid/Grid";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Drinks({ drinks }) {
  return (
    <Grid>
      {drinks.map(product => {
        const { _id, name, image, specialOffer, price, quantity, sizes, description } = product;
        return (
          <ProductCard
            key={_id}
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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/speisen/Trinken");
  const drinks = await res.json();

  return {
    props: {
      drinks,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
