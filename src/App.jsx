import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { ProductsPage } from './Pages/ProductsPage';


import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter >
        <PageMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
