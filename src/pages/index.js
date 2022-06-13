import { useState } from "react";

export default function Home({ name = "Linh", age, children }) {
  const [products, setProducts] = useState(1);
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Home: {children}</div>
      <h1 className="font-bold text-3xl text-red-500">{products}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          let products = "A";
          setProducts((prev) => prev + 1);
          // console.log(products)
        }}
      >
        Click
      </button>
    </div>
  );
}
