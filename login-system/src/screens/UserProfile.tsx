import React from "react";
import { ReactComponent as EditIcon } from "../assets/edit.svg";

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#EEEEEE]">
      {/* Login container */}
      <div className="font-poppins relative rounded-xl h-[355px] w-[400px] bg-[#ffffff]">
        <EditIcon className="absolute top-6 right-6" />

        <div className="flex flex-col justify-center items-start h-full mx-14 pb-8">
          <h1 className="text-xl text-[22px] font-bold mb-8">Name Here</h1>

          {/* Container for Email and Password sections */}
          <div className="flex space-x-7 w-full">
            {/* Left side (labels) */}
            <div className="flex flex-col space-y-8">
              <h2 className="font-bold text-sm">Email</h2>
              <h2 className="font-bold text-sm">Password</h2>
            </div>

            {/* Right side (values) */}
            <div className="flex flex-col space-y-8">
              <h3 className="text-sm">Email here</h3>
              <h3 className="text-sm">Encrypted password here</h3>
            </div>
          </div>
        </div>
      </div>

      <button className="absolute bottom-0 mb-20 w-[220px] h-[50px] rounded-3xl border border-[#A4A4A4] text-[#A4A4A4] font-bold">
        Log out
      </button>
    </div>
  );
};

export default UserProfile;
