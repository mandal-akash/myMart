import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../style/cart.css"
import emptyCart from "../../images/empty-cart1.png";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart, decreaseCart, removeCart } from '../../store/CartSlice';
const Cart = () => {
  const cart = useSelector((state) => (state.cart))
  const dispatch = useDispatch()

  const removeFromCart = (cartItem) =>{
    dispatch(removeCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) =>{
      dispatch(decreaseCart(cartItem))
  }
  const handleIncreaseCart = (cartItem) =>{
    dispatch(addToCart(cartItem))
}
  return (
    <div className="cart">
      {
        cart.cartItems.length === 0 ? (
          <div className="cart-empty flex justify-around items-center	 mt-16">
            <div className="cart-desc">
              <h2 className='text-4xl p-2'>Nothing in Here !</h2>
              <p className='text-2xl p-2 text-slate-600'>Your cart is currentyly empty</p>
              <div className="start-shopping">
                <p className=" border rounded-lg border-rose-500 text-center transition duration-300 ease-in-out text-red-500 text-xl p-2 mt-4 hover:text-rose-400 "><Link to="/">Start Shopping</Link></p>
              </div>
            </div>
            <div className="cart-empty-pic">
              <img src={emptyCart} alt="" className='w-96' />
            </div>
          </div>
        ) : (
          <div className="">
            {
              cart.cartItems.map((cartItem) => (
                <div className=" cartitem flex items-center mt-5 border border-y-red-500 w-3/4 m-6 p-4" key={cartItem.id}>
                  <div className="cartitem-detail flex items-center">
                    <img src={cartItem.image} alt="" className="w-48" />
                    <div className="cartitem-desc w-60 ml-14">
                      <h3 className='text-2xl pb-10'>{cartItem.title}</h3>
                      <p className='text-xl  text-red-700'><i className="bi bi-currency-rupee"></i> {cartItem.price}</p>
                      <div className="flex text-xl pt-10">
                        <span className="mr-6 border border-red-500 px-2.5 pb-1 rounded-full text-center hover:border-red-700 cursor-pointer"onClick={() => handleIncreaseCart(cartItem)}>+</span>
                        <p>{cartItem.cartQuantity}</p>
                        <span className="ml-6 border border-red-500 px-2.5 rounded-full hover:border-red-700 cursor-pointer" onClick={() => handleDecreaseCart(cartItem)}>-</span>
                      </div>
                    </div>

                  </div>
                  <div className=" cartitem-order ml-24">
                    <h2 className=" text-2xl pt-4">Order Summary</h2>
                    <div className="cartitem-summary flex justify-between pt-4 text-lg">
                      <p className="">Sub Total:</p>
                      <p className="">{cartItem.price * cartItem.cartQuantity}</p>
                    </div>
                    <div className=" cartitem-summary flex justify-between pt-4 text-lg">
                      <p>Tax:</p>
                      <p>18%</p>
                    </div>
                    <div className="cartitem-summary flex justify-between pt-4 text-lg">
                      <p>Shipping:</p>
                      <p className="text-orange-600 font-bold">Free</p>
                    </div>
                    <div className=" cartitem-summary flex justify-between pt-4 text-lg">
                      <p>Total:</p>
                      <p>{(cartItem.price * cartItem.cartQuantity) * 18 / 100 + cartItem.price * cartItem.cartQuantity}</p>
                    </div>
                    <button className="proceed-btn p-1.5 ml-2.5 mt-4 bg-red-500 border  rounded-sm text-white font-semibold border border-red hover:bg-red-600">Proceed Checkout</button>
                  </div>
                  <span className="delete-icon text-2xl pt-60" onClick={() => removeFromCart(cartItem)}>
                    <i className="bi bi-trash3 hover:cursor-pointer"></i>
                    </span>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Cart
