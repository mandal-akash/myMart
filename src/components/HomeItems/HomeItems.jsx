import React, { useEffect, useState } from "react";
import "../../style/HomeItems.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector} from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from "../../store/CartSlice";
const HomeItems = () => {

  const {data: products} = useSelector((state)=>state.items)
  const dispatch = useDispatch()


  const handleAddToCart = (items) => {
      dispatch(addToCart(items))
   
  }

  return (

    <div className="homeItems grid grid-cols-3 gap-24 ml-12  m-4">
      {
        products.map((items) => (
          <div className="card h-auto w-72 m-2 p-2 border border-neutral-500 rounded-md" key={items.id}>
            <div className="cardImage">
          <Link to={`/products/${items.id}`}> <img src={items.image} alt="" className="h-40 m-auto" /> </Link>
            </div>
            <div className="cardDesc p-4">
              <h2>{items.title}</h2>
              <p>${items.price}</p>
            </div>
            <div className="cardBtn p-4">
             <button onClick={() => handleAddToCart(items)} className="m-2 rounded-md p-2 pr-4 bg-rose-600 text-white font-bold hover:bg-rose-500"><i className="bi bi-bag px-2"></i>ADD TO BAG</button>
              <ToastContainer />
              <button className="m-2  border rounded  p-2 hover:border-black"><i className="bi bi-heart px-2"></i>Whishlist</button>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default HomeItems;
