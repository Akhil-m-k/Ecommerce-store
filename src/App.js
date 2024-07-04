import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { SearchProvider } from './utils/SearchContext';
// notification style from toastify
import 'react-toastify/dist/ReactToastify.css';
import { CategoryProvider } from './utils/CategoryContext';

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <CategoryProvider>
        <Header/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </CategoryProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
