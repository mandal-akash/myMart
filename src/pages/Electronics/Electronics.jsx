import React, { useEffect, useState } from 'react'
import "../../style/pages/electronics.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { addToCart } from "../../store/CartSlice";
const Electronics = () => {
    const { data: products } = useSelector((state) => state.items)

    const dispatch = useDispatch()
    const handleAddToCart = (items) => {
        dispatch(addToCart(items))

    }
    const filteredProducts = products.filter((item) => {
        return (item.category === "electronics");
    });
    return (
        <div className="women">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/464af6c9de766fc2.jpg?q=20"
                        className="w-full" />


                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ed4591126ff69acb.png?q=20"
                        className="w-full" />


                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4d279cfffa536c76.png?q=20"
                        className="w-full" />


                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/464af6c9de766fc2.jpg?q=20"
                        className="w-full" />


                </div>
            </div>

            <div className="electronics-products grid grid-cols-3 gap-24 ml-10">
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
export default Electronics