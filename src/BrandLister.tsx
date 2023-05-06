import { useParams } from 'react-router-dom';
import * as data from '../src/products.json';
import ProductListerProduct from './ProductListerProduct';

function BrandLister() {
  const slug = useParams().slug,
    products = data.products.filter(
      (product) => product.brand.toLowerCase() === slug?.replaceAll('-', ' ')
    ),
    brand = data.products.find(
      (product) => product.brand.toLowerCase() === slug?.replaceAll('-', ' ')
    )?.brand;

  return (
    <>
      <h2>{brand}</h2>
      <div className="card-lister">
        {products.map((product, i) => (
          <ProductListerProduct key={i} product={product} />
        ))}
      </div>
    </>
  );
}

export default BrandLister;
