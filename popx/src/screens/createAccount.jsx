import React from "react";
import { useNavigate } from "react-router";

const CreateAccount = () => {
  const navigate = useNavigate();
  return <>
    <div className="flex justify-center mt-14">
      <div className="bg-gray-100 w-70 h-120 ">
        <div className="pl-3 pt-3">
          <h1 className=" font-semibold ">Create your </h1>
          <h1 className=" font-semibold ">PopX accout </h1>
        </div>

        {/* input  */}
        <form action="">
          <div id="field">
            <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
              <input type="text" name="name" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter name" />
            </div>
            <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
              <input type="number" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter phone number" />
            </div>
            <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
              <input type="text" name="email" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter email address" />
            </div>
            <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
              <input type="text" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Enter password" />
            </div>
            <div className="flex items-center  justify-center mt-3 pl-3 pr-3">
              <input type="text" className="border border-gray-400 rounded p-1 w-full placeholder-gray-500 text-sm" placeholder="Company name" />
            </div>
          </div>
        </form>

        {/* text */}
        <div id="text" className="pl-3 pt-2">
          <h6 className="text-xs">Are you an Agency?</h6>
          <div className="flex">
            <label className="flex items-center text-sm">
              <input
                type="radio"
                name="option"
                value="yes"
                // checked={value === 'yes'}
                // onChange={(e) => setValue(e.target.value)}
                className="mr-1"
              />
              Yes
            </label>
            <label className="flex items-center text-sm ml-5">
              <input
                type="radio"
                name="option"
                value="no"
                // checked={value === 'no'}
                // onChange={(e) => setValue(e.target.value)}
                className="mr-1"
              />
              No
            </label>
          </div>
        </div>

        {/* create acc btn */}
        <div className="p-2">
          <button className="bg-purple-700 text-white text-sm w-full mt-25 p-1 rounded-sm"
            onClick={() => { navigate("/accountSetting") }}>Create Account</button>
        </div>
      </div>
    </div>
  </>
}

export default CreateAccount