import * as data from '../src/products.json';
import ProductListerProduct from './ProductListerProduct';

function ProductLister() {
  const filters = [
    'sale',
    ...new Set(data.products.map((product) => product.categories).flat(1)),
  ];

  return (
    <>
      <div className="card-lister">
        {data.products.map((product, i) => (
          <ProductListerProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductLister;
