import Head from "next/head";

import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Online-Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <ProductCard />
    </>
  );
};