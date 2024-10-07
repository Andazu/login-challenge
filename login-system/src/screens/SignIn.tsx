import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import SERVER_URL from "../utils/config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission

    // Validate input
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Handle login logic (API call)
    try {
      // Send a POST request to PHP backend
      const response = await fetch(`${SERVER_URL}/login.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Login successful!");
        // Redirect to the dashboard
        navigate("/userprofile");
      } else {
        // Display error message (Incorrect credentials)
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
