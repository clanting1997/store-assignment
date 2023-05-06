import { ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation().pathname;

  return (
    <>
      <div className="navigation">
        <div className="navigation-links">
          <Link to="/new" className={location === '/new' ? 'active' : ''}>
            New Collection
          </Link>
          <Link to="/">Sweaters</Link>
          <Link to="/">Dresses</Link>
          <Link to="/">Tops</Link>
          <Link to="/">Skirts</Link>
          <Link to="/">Sale</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Brands</Link>
          <Link to="/">Account</Link>
        </div>
        <div className="navigation-ctas">
          <Link to="/">
            <ShoppingCartOutlined />
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navigation;
