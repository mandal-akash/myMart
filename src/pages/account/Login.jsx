import React, { useState } from 'react'
import "../../style/login.css"
import { Link } from 'react-router-dom'
import { auth } from '../../backend/Firebase';
// import { login } from '../../store/UserSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert("you are now in")
      })
      .catch((error) => alert(error));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login h-screen flex flex-col justify-center items-center ">
      <div className="form flex flex-col p-6 mt-6">
        <label className='text-xl mb-2 text-slate-700'>Email:</label>
        <div className="email flex">
          <i className="bi bi-person text-xl pr-2"></i>
          <input type="email" name="email" value={email} id="email" placeholder='Enter your email' className=' w-80 mb-4 outline-none' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <label className='text-xl mb-2 text-slate-700'>Password:</label>
        <div className="password flex">
          <i className="bi bi-lock text-xl pr-2"></i>
          <input type="password" name="password" value={password} id="password" placeholder='Enter your password' className=' w-80 outline-none mb-4' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="loginBtn my-10 border w-22 border-rose-400 bg-rose-500 text-white p-3 rounded-sm hover:bg-rose-600" onClick={handleLogin}>Continue</button>
      </div>
      <div className="login-desc text-center mb-10">
        <p>By Contiuing, I agree to the <span className='text-sky-700 font-bold'>Term of Use</span> & <span className='text-sky-700 font-bold'>Privacy Policy</span></p>
        <button className="signBtn text-rose-700 font-bold underline hover:text-rose-600"><Link to="/signup">or sign up using</Link></button>
      </div>
    </div>
  )
}

export default Login