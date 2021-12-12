import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { CategoriesPage } from './Pages/CategoriesPage';


import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter >
        <PageMenu />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/produtos" element={<CategoriesPage />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
