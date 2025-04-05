import React from "react"; 
import img from "./image.jpg"
const AccountSetting=()=>{
  return <>
  <div className="flex justify-center mt-14 ">
    <div className="bg-white w-70 h-120 ">
      <div className="bg-white h-13">
        <h2 className="text-black bg-gray-100 font-semibold text-l p-3">Account Settings </h2>
      </div>
      <div id="img_info" className="flex h-22 bg-white">
        <img src={img} alt="y" className="h-20 w-20 ml-7 rounded-4xl"/>
        <div id="text" className="p-2 mt-1 ml-2">
          <h3 className="font-semibold text-sm">Maria</h3>
          <h3 className="font-light text-sm">maria29@gmail.com</h3>
        </div>
      </div><p className="text-xs pl-3 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.Id at quo deserunt laboriosam temporibus. Quidem, sunt ab. Veniam modi,</p>
    </div>
  </div>
</>
}

export default AccountSetting