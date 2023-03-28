import ProductCard from './ProductCard';
import latestProductsData from '../api/latestProductsData';

const Products = () => {
  const productCards = latestProductsData.map(item => {
    return <ProductCard key={item.id} {...item} />
  });

  return (
    <section className="products" id="products">
      <h3 className="heading">latest <span>products</span></h3>

      <div className="box-container">
        {productCards}
      </div>
    </section>
  )
}

export default Products