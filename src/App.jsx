import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch} from "react-redux";
import { fetchProducts } from "./store/ProductSlice";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const dispatch = useDispatch();
  dispatch(fetchProducts());
  
  return (
    <>
      <div className="App">
        <Header />
        <div className="app-body h-screen">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
