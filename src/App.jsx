import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Prodcuts from "./pages/Prodcuts";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Cart from "./pages/Cart";



function App() {
  return (
    <Provider store={store}>
      <Router>
       <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:category" element={<Prodcuts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
