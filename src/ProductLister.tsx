import * as data from '../public/products.json';
import Filters from './Filters';
import ProductListerProduct from './ProductListerProduct';

function ProductLister() {
  const filters = [
    'sale',
    ...new Set(data.products.map((product) => product.categories).flat(1)),
  ];

  return (
    <>
      <Filters filters={filters} />
      <div className="container">
        {data.products.map((product, i) => (
          <ProductListerProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductLister;
