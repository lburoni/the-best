const products = [
  {
    id: "1",
    name: "god of war",
    price: 20000,
    category: "juegos ps4",
    img: "https://gorilagames.com/img/Public/1019-producto-god-of-war-ragnarok-5986.jpg",
    stock: 30,
    description: "god of war para ps4",
  },
  {
    id: "2",
    name: "fifa 23",
    price: 30000,
    category: "juegos ps5",
    img: "https://arsonyb2c.vtexassets.com/arquivos/ids/360540/14633744545_001.jpg?v=1777253630",
    stock: 60,
    description: "fifa 23 para ps5",
  },
  {
    id: "3",
    name: "resident evil 8",
    price: 15000,
    category: "juegos xbox",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/207/880/products/71hpmcqq8vl-_sl1346_1-8debc26328a48040b416212239607869-640-0.jpg",
    stock: 44,
    description: "resident evil 8 para xbox",
  },
  {
    id: "4",
    name: "sony playstation 5",
    price: 800000,
    category: "consolas",
    img: "https://jumboargentina.vtexassets.com/arquivos/ids/788282/Consola-Ps5-Playstation-Hw-Standard-2-974113.jpg?v=638252265640170000",
    stock: 15,
    description: "consola sony playstation 5",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.category === productCategory));
    }, 500);
  });
};
