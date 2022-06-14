export async function loadProducts() {
  // Call an external API endpoint to get products
  const res = await fetch("http://localhost:5000/api/products");
  const data = await res.json();

  return data;
}
