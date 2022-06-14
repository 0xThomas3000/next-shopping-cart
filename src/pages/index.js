import Products from "../components/Products";
import { loadProducts } from "./api/products";

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const products = await loadProducts();

  // Props returned will be passed to the page component
  return { props: { products } };
}

const Home = ({ products }) => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default Home;
