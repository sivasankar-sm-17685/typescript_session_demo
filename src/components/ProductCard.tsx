interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  category: string;
}
function ProductCard(props: ProductCardProps) {
  const { thumbnail, title, description, category, price, rating } = props;
  return (
    <div className='product-card'>
      <img src={thumbnail} alt={title} className='product-thumbnail' />
      <p className='product-category'>{category}</p>
      <h3 className='product-title'>{title}</h3>
      <h5 className='product-description'>{description}</h5>
      <h5 className='product-rating'>{rating}</h5>
      <p className='product-price'>${price}</p>
    </div>
  );
}

export default ProductCard;
