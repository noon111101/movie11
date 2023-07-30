import 'swiper/swiper.min.css';
import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail';
import Searchlog from './pages/search/Searchlog';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/search/:keyword' element={<Searchlog/>}/>
        <Route extact path="/:category" element={<Catalog/>}/>
        <Route extact path="/:category/:id" element={<Detail/>}/>
        <Route extact path="/" element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;