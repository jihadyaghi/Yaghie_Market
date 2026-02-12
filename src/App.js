import './App.css';
import Navbar from './components/navbar';
import {Routes,Route} from "react-router-dom";
import Home from './pages/home_page';
import AddCart from './pages/add_cart_page';
import Supermarket from './pages/supermarket_page';
import Butchery from './pages/butchery_page';
import Chicken from './pages/chicken_page';
import Offers from './pages/offers_page';
import Footer from './components/footer';
function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AddCart' element={<AddCart/>}/>
      <Route path='/supermarket' element={<Supermarket/>}/>
      <Route path='/butchery' element={<Butchery/>}/>
      <Route path='/chicken' element={<Chicken/>}/>
      <Route path='/offers' element={<Offers/>}/>
    </Routes>
    <Footer/>
   </div>
   
  );
}

export default App;
