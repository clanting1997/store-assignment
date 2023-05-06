import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import ProductLister from './ProductLister';
import ProductDetail from './ProductDetail';
import BrandLister from './BrandLister';
import NewCollection from './NewCollection';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductLister />} />
          <Route path=":slug" element={<ProductDetail />} />
          <Route path="brand/:slug" element={<BrandLister />} />
          <Route path="/new" element={<NewCollection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
