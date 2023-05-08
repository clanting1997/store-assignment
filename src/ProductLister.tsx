import * as data from '../src/products.json';
import ProductListerProduct from './ProductListerProduct';

function ProductLister() {
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
