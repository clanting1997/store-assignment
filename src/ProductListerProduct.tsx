import { Link } from 'react-router-dom';

interface Props {
  product: {
    title: string;
    brand: string;
    description: string;
    image: string;
    price: number;
    discountedPrice?: number;
    properties: {
      color: string[];
      fabric?: string[];
    };
    categories: string[];
  };
}

function ProductListerProduct({ product }: Props) {
  return (
    <>
      <Link
        to={'/'.concat(
          product.brand
            .toLowerCase()
            .replaceAll(' ', '-')
            .concat('_')
            .concat(product.title.toLowerCase().replaceAll(' ', '-'))
        )}
        className="product-card"
      >
        <div className="product-header">
          {product.categories.includes('new') || product.discountedPrice ? (
            <>
              <div className="labels">
                {product.categories.includes('new') ? (
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
            src={`https://www.shopwaredemo.nl/media/images/${product.image}`}
          />
        </div>
        <div className="product-content">
          <p>{product.brand}</p>{' '}
          {/* Links inside of links are illegal. Brand is only clickable on PDP */}
          <p>
            <b>{product.title}</b>
          </p>
          <div className="product-price">
            {product.discountedPrice ? (
              <>
                <span className="old-price">{product.price}</span>
                <span className="discounted-price">
                  {product.discountedPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="price">{product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductListerProduct;
