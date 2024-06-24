import React, { useEffect, useState } from 'react'
import "../../style/pages/women.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../store/CartSlice";
import { Link } from 'react-router-dom';
const Women = () => {
  const { data: products } = useSelector((state) => state.items)

  const dispatch = useDispatch()
  const handleAddToCart = (items) => {
    dispatch(addToCart(items))

  }

  const filteredProducts = products.filter((item) => {
    return (item.category === "women's clothing");
  });
  return (
    <div className="women">
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060424-MAINBANNER-Z1-P5-M&S-HUNKEMOLLER-MIN40.jpg"
      className="w-full" />
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060424-MAINBANNER-Z1-P2-STYLUM-GLAMROOTS-UNDER999.jpg"
      className="w-full" />
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060424-MAINBANNER-Z1-P3-FIG-RIO-UNDER499.jpg"
      className="w-full" />
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-060424-MAINBANNER-Z1-P7-BAGGIT-LAVIE-MIN50.jpg"
      className="w-full" />
  </div>
</div>
      <div className="category mt-10">
        <h1 className='text-4xl font-bold text-gray-800 ml-12 mt-20 mb-12'>CATOGIRES TO BAG</h1>

        <div className="category-box  flex justify-around m-8 text-center mt-20">
          <div className="women-Category border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1516207661925-8baf004a3619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjB0c2hpcnR8ZW58MHwwfDB8fHww" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Shirts</p>
          </div>
          <div className="women-Category border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFwcGFyZWx8ZW58MHwwfDB8fHww" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">T-Shirts</p>
          </div>
          <div className="women-Category border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://plus.unsplash.com/premium_photo-1691367279313-71af7ba83f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGplYW5zfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Jeans</p>
          </div>
          <div className="women-Category border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBqZWFuc3xlbnwwfDB8MHx8fDA%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Shorts & Trousers</p>
          </div>
          <div className="women-Category border p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer transition duration-700 ease-in-out">
            <img className='border-2 rounded-full h-44 w-48' src="https://images.unsplash.com/photo-1534653299134-96a171b61581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwc2FuZGFsfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
            <p className="p-2 text-xl font-bold font-mono text-slate-800">Casual Shoes</p>
          </div>
        </div>
      </div>
      <div className="womens-products grid grid-cols-3 gap-24 ml-10">
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
export default Women