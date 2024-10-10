import React, { useState, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import SERVER_URL from "../utils/config";
import { useNavigate } from "react-router-dom";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const UserSignUp = () => {
  const navigate = useNavigate();

  // State for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [is_admin, setIsAdmin] = useState(false);

  const [inputSequence, setInputSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the pressed key to the sequence
      setInputSequence((prevSequence) => {
        const updatedSequence = [...prevSequence, e.key];

        // Check if the input sequence matches the Konami code
        if (updatedSequence.join("").includes(KONAMI_CODE.join(""))) {
          alert("Konami Code activated!");
          // Call the setIsAdmin(true) function if the sequence is correct
          setIsAdmin(true);
        }

        // If the length exceeds the Konami Code length, reset sequence
        if (updatedSequence.length > KONAMI_CODE.length) {
          updatedSequence.shift(); // Remove the first element to keep it within the length of the Konami code
        }

        return updatedSequence;
      });
    };

    // Listen for keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // onSubmit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate input
    if (!username || !email || !password || !repeatPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Handle the sign-up logic (API call)
    try {
      // Send a POST request to PHP backend
      const response = await fetch(`${SERVER_URL}/signup.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          is_admin: is_admin,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Sign-up successful!");
        // Redirect to the login page
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#122c60]'>
      {/* Sign-up container */}
      <div className='font-poppins rounded-xl h-[538px] w-[400px] bg-[#ffffff]'>
        <h1 className='text-center text-xl text-[22px] font-bold pt-12'>
          Create Profile
        </h1>

        {/* Form */}
        <form
          className='flex flex-col items-center pt-8 text-[13px]'
          onSubmit={handleSubmit}
        >
          <CustomInput
            labelText='Username'
            type='text' // Change to 'text' instead of 'username'
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
          <CustomInput
            labelText='Email'
            type='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
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
          <CustomInput
            labelText='Repeat Password'
            type='password'
            value={repeatPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRepeatPassword(e.target.value)
            }
          />
          <button
            type='submit' // Set button type to 'submit'
            className='w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
