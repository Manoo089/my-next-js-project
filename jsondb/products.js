const jsondb = {
  categories: [
    { name: "Vorspeisen", url: "vorspeisen" },
    { name: "Hauptgerichte", url: "hauptgerichte" },
    { name: "Nachspeisen", url: "nachspeisen" },
    { name: "Getränke", url: "drinks" },
  ],
  products: [
    {
      name: "Crispy Burger",
      description: "American Style Burger",
      category: "Hauptgericht",
      price: 6.99,
      url: "burger",
      image: "/images/products/burger.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "Nimm 2, bezahle 1!",
    },
    {
      name: "Coca Cola",
      description: "Eisgekühlte Cola",
      category: "Trinken",
      price: 1.99,
      url: "cola",
      image: "/images/products/cola.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Erdbeer Eis",
      description: "Eis mit Erdbeeren und Sahne",
      category: "Nachspeise",
      price: 2.99,
      url: "erdbeereis",
      image: "/images/products/eis.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Falaffel",
      description: "Orientalische Falaffel",
      category: "Hauptgericht",
      price: 6.99,
      url: "falaffel",
      image: "/images/products/falaffel.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Lahmacun",
      description: "Turkish Style Lahmacun",
      category: "Hauptgericht",
      price: 4.5,
      url: "lahmacun",
      image: "/images/products/lahmacun.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Lasagne",
      description: "Lasagne aus Italien",
      category: "Hauptgericht",
      price: 8.5,
      url: "lasagne",
      image: "/images/products/lasagne.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Schokoladen Muffin",
      description: "Sehr süßer Schoko Muffin",
      category: "Nachspeise",
      price: 3.2,
      url: "muffin",
      image: "/images/products/muffin.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Pizza Original",
      description: "4 seasons Pizza",
      category: "Hauptgericht",
      price: 7.5,
      url: "pizza",
      image: "/images/products/pizza.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
    {
      name: "Süßkartoffel Pommes",
      description: "Süßkartoffel Pommes mit Dip",
      category: "Hauptgericht",
      price: 4.8,
      url: "pommmes",
      image: "/images/products/pommes.jpg",
      sizes: ["Normal", "XL", "XXL"],
      quantity: "5",
      specialOffer: "",
    },
  ],
};
export default jsondb;
