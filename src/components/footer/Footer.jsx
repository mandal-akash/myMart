import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../style/footer.css";
import appstore from "../../images/app-store.png";
import googlePlay from "../../images/google-store.png";
const Footer = () => {
  return (
    <div className="footer text-gray-500 bg-slate-100">
      <div className="footer-items flex flex-wrap gap-16 ml-12 items-center list-none ">
        <div className="online-shoping py-4">
          <p className="tracking-widest text-sm font-bold text-black">ONLINE SHOPPING</p>
          <li className="pt-4">Men</li>
          <li className="pt-1">Women</li>
          <li className="pt-1">Kids</li>
          <li className="pt-1">Home & Living</li>
          <li className="pt-1">Beauty</li>
          <li className="pt-1">Gift Cards</li>
          <li className="pt-1">Myntra Insider</li>
        </div>
        <div className="customer-policies">
          <p className="tracking-widest text-sm font-bold text-black">CUSTOMER POLICIES</p>
          <li className="pt-4">Contact Us</li>
          <li className="pt-1">FAQ</li>
          <li className="pt-1">T&C</li>
          <li className="pt-1">Terms of Use</li>
          <li className="pt-1">Track of Orders</li>
          <li className="pt-1">Cancellation</li>
          <li className="pt-1">Privacy Policy</li>
        </div>
        <div className="app-link ">
          <p className="tracking-widest text-sm font-bold text-black">
            EXPERIENCE MYNTRA APP ON MOBILE
          </p>
          <div className="download-link flex pt-7">
            <img className="w-36 h-16" src={googlePlay} alt="" />
            <img className="w-36 h-16" src={appstore} alt="" />
          </div>
          </div>
          <div className="social-link py-6 ">
            <p className="tracking-widest text-sm font-bold px-2 pb-2 text-black">
              KEEP IN TOUCH
            </p>
            <i className="bi bi-facebook text-3xl text-slate-600 px-2"></i>
            <i className="bi bi-twitter px-5 text-3xl text-slate-600"></i>
            <i className="bi bi-instagram px-5 text-3xl text-slate-600"></i>
            <i className="bi bi-youtube px-5 text-3xl text-slate-600"></i>
          </div>
        
        <div className="useful-links">
          <p className="tracking-widest text-sm font-bold text-black">USEFUL LINKS</p>
          <li className="pt-6">Blog</li>
          <li className="pt-1">Careers</li>
          <li className="pt-1">Site Map</li>
          <li className="pt-1">Corporate Information</li>
          <li className="pt-1">Clear Trip</li>
          <li className="pt-1">Whitehat</li>
        </div>
        <div className="footer-copyright items-center flex-1 mr-10 text-center">
        <p className="mr-4">In case of any concern, <span className="text-sky-500 font-bold">Contact Us</span> © 2024 www.myMart.com. All rights reserved.</p>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;
