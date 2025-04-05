import React from "react";
import { Navigate, useNavigate } from "react-router";

const SignInPage=()=>{
  const navigate = useNavigate();
  return <>
  <div className="flex justify-center mt-14">
    <div className="bg-gray-100 w-70 h-120 ">
      <div className="pl-3 pt-3">
      <h1 className=" font-semibold ">SignIn to your </h1>
      <h1 className=" font-semibold ">PopX accout </h1>
      <h6 className="pt-1 text-xs font-light pr-5 w-55">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
      </div>
      
      {/* input  */}
      <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
      <input type="text" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter email address"/>
      </div>
      <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
      <input type="text" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter password"/>
      </div>

      {/* login_btn */}
      <div className="p-2">
      <button className="bg-gray-300 text-white text-bold text-sm w-full p-1 rounded-sm" 
      onClick={()=>{navigate("/accountSetting")}}>Login</button>
      </div>
    </div>
  </div>
</>
}

export default SignInPage