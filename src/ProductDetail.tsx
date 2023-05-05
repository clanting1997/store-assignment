import { useParams } from 'react-router-dom';
import * as data from '../public/products.json';

function ProductDetail() {
  const product = data.products.find(
    (product) =>
      product.title.toLowerCase() ===
        useParams().slug?.replaceAll('-', ' ').split('_')[1] &&
      product.brand.toLowerCase() ===
        useParams().slug?.replaceAll('-', ' ').split('_')[0]
  );

  return (
    <>
      <div className="container">{product?.title}</div>
    </>
  );
}

export default ProductDetail;
