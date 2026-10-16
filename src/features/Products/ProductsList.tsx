import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';

function ProductList() {
  const { products, error, isLoading } = useProducts();

  if (isLoading) {
    return <p>Fetching Products....</p>;
  }

  if (error) {
    return <p className='auth-error'>{error}</p>;
  }
  return (
    <div className='product-grid'>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            thumbnail={product.thumbnail}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
