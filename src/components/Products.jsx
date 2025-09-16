async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  return data;
}

export { fetchProducts };

