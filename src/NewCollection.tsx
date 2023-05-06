import * as data from '../src/products.json';
import ProductListerProduct from './ProductListerProduct';

function NewCollection() {
  const products = data.products.filter((product) =>
    product.categories.find((categories) => categories.includes('new'))
  );

  return (
    <>
      <div className="card-lister">
        {products.map((product, i) => (
          <ProductListerProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
}

export default NewCollection;
