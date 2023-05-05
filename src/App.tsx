import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navigation from './Navigation';
import ProductLister from './ProductLister';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductLister />} />
        <Route path=":slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
