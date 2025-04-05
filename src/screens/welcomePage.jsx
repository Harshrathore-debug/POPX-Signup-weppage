import React from "react";
import { useNavigate } from "react-router";


const WelcomePage = () => {
  const navigate= useNavigate();
  return <>
    <div className="flex justify-center mt-14">
      <div className="bg-gray-100 w-70 h-120 ">
        <div className="mt-70">
        <h1 className="p-2 font-semibold ">Welcome to PopX</h1>
        <h6 className="pl-2 text-xs font-light pr-5 w-55">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
        </div>
        <div className="p-2 mt-3">
        <button className="bg-purple-700 text-white text-sm w-full p-1 rounded-sm" onClick={()=>{navigate("/createAccount")}}>Create Account</button>
        </div>
        <div className="pl-2 pr-2">
        <button className="bg-purple-300 text-black font-semibold text-sm w-full p-1 rounded-sm" onClick={()=>{navigate("/signInPage")}}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  </>
}

export default WelcomePage 