import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const UserEditProfile = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#EEEEEE]">
      {/* Login container */}
      <div className="font-poppins rounded-xl h-[568px] w-[395px] bg-[#ffffff]">
        <h1 className="text-center text-xl text-[22px] font-bold pt-12">
          Update Profile
        </h1>

        {/* Form */}
        <form className="flex flex-col items-center pt-12 text-[13px]">
          <CustomInput labelText="Username" type="username" />
          <CustomInput labelText="Email" type="email" />
          <CustomInput labelText="Type Old Password" type="password" />
          <CustomInput labelText="Type New Password" type="password" />
          <CustomInput labelText="Repeat New Password" type="password" />

          <button className="w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEditProfile;
