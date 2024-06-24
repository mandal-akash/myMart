
import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from 'react-router-dom'
import "../../style/product.css"
import { addToCart } from "../../store/CartSlice";
import { useDispatch } from 'react-redux';
const Product = () => {

  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState({})

  const dispatch = useDispatch();
  const handleAddToCart = (items) => {
    dispatch(addToCart(items))

  }
  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json();
      setSingleProduct(data)
    }
    getSingleProduct()
  }, [])

  return (
      <div className="singleProduct flex items-center justify-around m-2 mt-20 p-4" key={singleProduct.id}>
        <div className="product-image">
          <img src={singleProduct.image} alt="" className="w-72" />
        </div>
        <div className="product-info max-w-2xl">
          <h2 className="text-6xl p-4 ">{singleProduct.title}</h2>
          <p className="text-xl p-4 text-slate-600">{singleProduct.description}</p>
          <h3 className='text-3xl p-4 text-red-500'><i className="bi bi-currency-rupee"></i>{singleProduct.price}</h3>
          <div className="shop-btn p-4">
            <button className="add-to-bag mr-2 text-lg border border-red-500 p-2 pr-4 hover:text-red-600" onClick={() => handleAddToCart(items)}><i className="bi bi-bag px-2"></i>ADD TO BAG</button>
            <button className=" shop-now ml-6 text-lg border border-red-500 p-2 pr-4 hover:text-red-600"><i className="bi bi-cart2 px-2"></i>SHOP NOW</button>
          </div>
        </div>
      </div>
  )
}

export default Product
