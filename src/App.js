import './App.css';
import "./media.css"
import Nav from "./components/Nav/Nav";
import {Routes, Route}  from "react-router-dom"
import AboutUs from "./pages/AboutUs/AboutUs";
import Delivery from "./pages/Delivery/Delivery";
import Payment from "./pages/Payment/Payment";
import Main from "./components/Main/Main";
import CyclingShirts from "./components/Category/CyclingShirts/CyclingShirts";
import Leggings from "./components/Category/Leggings/Leggings";
import Rashguards from "./components/Category/Rashguards/Rashguards";
import Shirts from "./components/Category/Shirts/Shirts";
import Shoes from "./components/Category/Shoes/Shoes";
import Shorts from "./components/Category/Shorts/Shorts";
import TShirts from "./components/Category/TShirts/TShirts";
import Create from "./components/Create/Create";
import SingleClothes from "./pages/SingleClothes/SingleClothes";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Bags from "./components/Bags/Bags";
import Masks from "./components/Masks/Masks";
import Underwear from "./components/UnderWear/Underwear";
import Footer from "./components/Footer/Footer";




const App = () => {

  

  return (
    <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/bags" element={<Bags/>} />
            <Route path="/underwear" element={<Underwear/>} />
            <Route path="/masks" element={<Masks/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/aboutUs"  element={<AboutUs/>}/>
            <Route path="/delivery"  element={<Delivery/>}/>
            <Route path="/payment"  element={<Payment/>}/>
            <Route path="/cycling"  element={<CyclingShirts />}/>
            <Route path="/leggings"  element={<Leggings />}/>
            <Route path="/rashguards"  element={<Rashguards />}/>
            <Route path="/shirts"  element={<Shirts />}/>
            <Route path="/shoes"  element={<Shoes />}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>


            <Route path="/shorts"  element={<Shorts />}/>
            <Route path="/t-shirts"  element={<TShirts />}/>
            <Route path="/create"  element={<Create/>}/>
            <Route path="/singleClothes/:id"  element={<SingleClothes/>}/>
        </Routes>

        <Footer/>
    </div>

  );
}

export default App;
