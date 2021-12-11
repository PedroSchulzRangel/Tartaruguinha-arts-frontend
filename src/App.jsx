import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { ProductsPage } from './Pages/ProductsPage';
import { CategoryPage } from './Pages/CategoryPage';


import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter >
        <PageMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/categoria" element={<CategoryPage />} />
          <Route path='/comprar' component={() => { 
            window.location.href = 'https://www.instagram.com/tartaruguinhaarts/'; 
            return null;
        }}/>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
