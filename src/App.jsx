import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { CategoriesPage } from './Pages/CategoriesPage';
import { ProductsPage } from './Pages/ProductsPage';

import { CategoryPageProvider } from './hooks/useCategoryPage';
import { OpenModalProvider } from './hooks/useOpenModal';


import './App.scss';


function App() {
  return (
    <OpenModalProvider>
      <CategoryPageProvider>
        <BrowserRouter >
          <PageMenu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categorias" element={<CategoriesPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
          </Routes>

        </BrowserRouter>

      </CategoryPageProvider>
    </OpenModalProvider>
  );
}

export default App;
