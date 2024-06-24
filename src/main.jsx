import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Men from "./pages/Men/Men.jsx"
import Women  from "./pages/Women/Women.jsx";
import  Beauty from "./pages/Beauty/Beauty.jsx";
import  Product from "./pages/product/Product.jsx"
import  Electronics from "./pages/Electronics/Electronics.jsx";
import Login from "./pages/account/Login.jsx";
import SignUp from "./pages/account/SignUp.jsx";
import Cart from "./components/cart/Cart.jsx"
import Home from "./routes/Home.jsx";
import './index.css'
import { createBrowserRouter, RouterProvider, useParams, } from "react-router-dom";
import store  from "./store/store.js";
import { Provider } from 'react-redux';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/men',
        element: <Men />
      },
      {
        path: '/women',
        element: <Women />
      },
      {
        path: '/electronics',
        element: <Electronics/>
      },
      {
        path: '/beauty',
        element: <Beauty/>
      },
      {
        path: '/products/:id',
        element: <Product/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <SignUp/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
