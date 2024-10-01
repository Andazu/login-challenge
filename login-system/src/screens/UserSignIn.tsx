import React from "react";

const UserSignIn = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#122c60]">
      {/* Login container */}
      <div className="font-poppins rounded-xl h-[538px] w-[400px] bg-[#ffffff]">
        <h1 className="text-center text-xl text-[22px] font-bold pt-12">
          Create Profile
        </h1>
        <form className="flex flex-col items-center pt-8 text-[13px]">
          <input
            type="text"
            placeholder="Username"
            className="w-[309px] h-[50px] pl-6 py-4 rounded-md border border-[#E4E4E4] placeholder-[#C4C4C4] font-light mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[309px] h-[50px] pl-6 py-4 rounded-md border border-[#E4E4E4] placeholder-[#C4C4C4] font-light mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[309px] h-[50px] pl-6 py-4 rounded-md border border-[#E4E4E4] placeholder-[#C4C4C4] font-light mb-4"
          />
          <input
            type="repeat-password"
            placeholder="Repeat Password"
            className="w-[309px] h-[50px] pl-6 py-4 rounded-md border border-[#E4E4E4] placeholder-[#C4C4C4] font-light mb-4"
          />
          <button className="w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignIn;
