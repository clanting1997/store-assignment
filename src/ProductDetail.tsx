import { useParams } from 'react-router-dom';
import * as data from '../src/products.json';
import { Link } from 'react-router-dom';

function ProductDetail() {
  const slug = useParams().slug,
    product = data.products.find(
      (product) =>
        product.title.toLowerCase() ===
          slug?.replaceAll('-', ' ').split('_')[1] &&
        product.brand.toLowerCase() === slug?.replaceAll('-', ' ').split('_')[0]
    );

  return (
    <>
      <div className="detail-content">
        <div className="product-card detail-card">
          <div className="product-header">
            {product?.categories.includes('new') || product?.discountedPrice ? (
              <>
                <div className="labels">
                  {product?.categories.includes('new') ? (
                    <div className="new">NEW</div>
                  ) : null}
                  {product.discountedPrice ? (
                    <div className="discount">
                      {Math.round(
                        100 - (product.discountedPrice * 100) / product.price
                      ) * -1}
                      %
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}
            <img
              src={`https://www.shopwaredemo.nl/media/images/${product?.image}`}
            />
          </div>
          <div className="product-content">
            {product?.brand ? (
              <Link
                to={'/brand/'.concat(
                  product.brand.toLowerCase().replaceAll(' ', '-')
                )}
              >
                {product.brand}
              </Link>
            ) : null}
            <p>
              <strong>{product?.title}</strong>
            </p>
            <p>{product?.description}</p>
            <div className="product-price">
              {product?.discountedPrice ? (
                <>
                  <span className="old-price">{product.price}</span>
                  <span className="discounted-price">
                    {product.discountedPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="price">{product?.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
