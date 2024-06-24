import React, { useEffect, useState } from 'react'
import "../../style/pages/beauty.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import jewellery from "../../images/jewellery-1.png"
import jewellery2 from "../../images/jewellery2.png"
import jewellery3 from "../../images/jewellery3.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { addToCart } from "../../store/CartSlice";
import { useSelector ,  useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
const Beauty = () => {
    const { data: products } = useSelector((state) => state.items)
    const dispatch =  useDispatch()

    const handleAddToCart = (items) => {
        dispatch(addToCart(items))
     
    }

    const filteredProducts = products.filter((item) => {
        return (item.category === "jewelery");
      });
    return (
        <div className="Beauty">
           <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={jewellery}
      className="w-full" />
   
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={jewellery2}
      className="w-full" />
   
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={jewellery3}
      className="w-full" />
   
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
    src={jewellery}
      className="w-full" />
   
  </div>
</div>

            <div className="beauty-products grid grid-cols-3 gap-24 ml-11 m-4">
                {
                    filteredProducts.map((items) => (
                        <div className="card h-auto w-72 m-2 p-2 border border-neutral-500 rounded-md" key={items.id}>
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
export default Beauty