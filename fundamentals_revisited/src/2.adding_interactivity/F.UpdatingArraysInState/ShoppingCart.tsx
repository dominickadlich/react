import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          // Create a new object with changes
          return { ...product, count: product.count + 1 };
        } else {
          // No changes
          return product;
        }
      }),
    );
  }

  function handleDecreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          // Create a new object with changes
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      }),
    );
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
          {product.count > 1 ? (
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              {" "}
              -{" "}
            </button>
          ) : (
            <button
              onClick={() => {
                setProducts(products.filter((i) => i.id !== product.id));
              }}
            >
              {" "}
              Delete{" "}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
