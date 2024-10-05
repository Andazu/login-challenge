import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const SignIn = () => {
  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    // Handle sign-in logic here (e.g., API call)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#122c60]'>
      {/* Login container */}
      <div className='font-poppins rounded-xl h-[405px] w-[400px] bg-[#ffffff]'>
        <h1 className='text-center text-xl text-[22px] font-bold pt-12'>
          Sign In
        </h1>

        {/* Form */}
        <form
          className='flex flex-col items-center pt-8 text-[13px]'
          onSubmit={handleSubmit}
        >
          <CustomInput
            labelText='Username'
            type='text'
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <CustomInput
            labelText='Password'
            type='password'
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            type='submit'
            className='w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold'
          >
            Login
          </button>
          <a href='/signup' className='text-[13px] mt-4 text-[#1EB2E8]'>
            Don't have an account? Sign up
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
