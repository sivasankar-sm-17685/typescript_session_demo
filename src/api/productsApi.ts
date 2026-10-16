import type { ProductsResponse } from '../types/products';

export async function getProducts(): Promise<ProductsResponse> {
  const productResponse = await fetch('https://dummyjson.com/products');

  if (!productResponse.ok) {
    throw new Error('Unable to fetch products');
  }

  return productResponse.json();
}
