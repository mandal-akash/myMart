import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "../../style/pages/men.css"
import 'swiper/css/navigation';
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { addToCart } from "../../store/CartSlice";
const Men = () => {
  const { data: products } = useSelector((state) => state.items)

  const dispatch = useDispatch()

  const handleAddToCart = (items) => {
    dispatch(addToCart(items))

  }
  const filteredProducts = products.filter((item) => {
    return (item.category === "men's clothing");
  });
  return (
    <div className="men">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/e384cb32-690c-4ccf-a6cb-61df36960bb21651599573972-Workwear_Desk.jpg"
            className="w-full" />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/eb6408d8-b413-49f7-8525-317fddba53821650180659351-Casual---Sports-Shoes_Desk.jpg"
            className="w-full" />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/abd2b07f-954c-43ad-ba39-bfa50527d0641650180659364-Backpacks---Luggage_Desk.jpg"
            className="w-full" />
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/a53b7f7e-37ab-4319-a1b4-5d9c0cca68601650180659343-Lancer_Desk.jpg"
            className="w-full" />
        </div>
      </div>
      <div className="category mt-10">
        <h1 className='text-4xl font-bold text-gray-800 ml-12 mt-20 mb-12'>CATOGIRES TO BAG</h1>

        <div className="category-box  flex justify-around m-8 text-center mt-20">
          <div className="menCategory border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1545838593-b4aeec49204b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Shirts</p>
          </div>
          <div className="menCategory border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1622351772377-c3dda74beb03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">T-Shirts</p>
          </div>
          <div className="menCategory border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://plus.unsplash.com/premium_photo-1691367279313-71af7ba83f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGplYW5zfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Jeans</p>
          </div>
          <div className="menCategory border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://plus.unsplash.com/premium_photo-1664874602679-84748d471973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcnRzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Shorts&Trousers</p>
          </div>
          <div className="menCategory border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwwfDB8fHww" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Casual Shoes</p>
          </div>
        </div>
      </div>

      <div className="mens-products grid grid-cols-3 gap-24 ml-10">
        {
          filteredProducts.map((items) => (
            <div className="card h-auto w-72 m-4 p-2 border border-neutral-500 rounded-md" key={items.id}>
              <div className="cardImage">
                <Link to={`/products/${items.id}`}><img src={items.image} alt="" className="h-40 m-auto" /> </Link>
              </div>
              <div className="cardDesc p-4">
                <h2>{items.title}</h2>
                <p>${items.price}</p>
              </div>
              <div className="cardBtn p-4">
                <button className="m-2 rounded-md p-2 pr-4 bg-rose-600 text-white font-bold hover:bg-rose-500" onClick={() => handleAddToCart(items)}><i className="bi bi-bag px-2"></i>ADD TO BAG</button>
                <button className="m-2  border rounded  p-2 hover:border-black"><i className="bi bi-heart px-2"></i>Whishlist</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Men