import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#122c60]">
      {/* Login container */}
      <div className="font-poppins rounded-xl h-[405px] w-[400px] bg-[#ffffff]">
        <h1 className="text-center text-xl text-[22px] font-bold pt-12">
          Sign In
        </h1>

        {/* Form */}
        <form className="flex flex-col items-center pt-8 text-[13px]">
          <CustomInput labelText="Username" type="username" />
          <CustomInput labelText="Password" type="password" />
          <button className="w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
