import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductsCard = ({ product }) => {
  return (
    <div className="card">
      <Image
        src={product.image}
        alt={product.image}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />

      <div className="box">
        <h3>
          <Link href={`/products/${product._id}`}>
            <a className="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
              {product.title}
            </a>
          </Link>
        </h3>
        <h4>${product.price}</h4>

        <div className="btn_div">
          <button className="btn_edit">Edit</button>
          <button className="btn_delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
