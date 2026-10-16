import { useEffect, useState } from 'react';
import type { ProductItem, ProductsResponse } from '../types/products';
import { getProducts } from '../api/productsApi';

export function useProducts() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isCancelled = false;

    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const produtcList: ProductsResponse = await getProducts();
        if (!isCancelled) {
          setProducts(produtcList.products);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(
            err instanceof Error
              ? err.message
              : 'Something went Wrong, Please try again later'
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };
    loadProducts();
    return () => {
      isCancelled = true;
    };
  }, []);
  return { products, error, isLoading };
}
