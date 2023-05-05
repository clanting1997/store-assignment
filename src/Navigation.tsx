import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link to="/">New Collection</Link>
        <Link to="/">Sweaters</Link>
        <Link to="/">Dresses</Link>
        <Link to="/">Tops</Link>
        <Link to="/">Skirts</Link>
        <Link to="/">Sale</Link>
        <Link to="/">Account</Link>
        <Link to="/">
          <img />
          Cart
        </Link>
      </div>
    </>
  );
}

export default Navigation;
