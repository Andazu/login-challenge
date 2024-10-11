import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import SERVER_URL from "../utils/config";

interface User {
  id: number;
  username: string;
  email: string;
  is_admin: boolean;
}

const UserEditProfile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user as User | undefined;
  console.log("User:", user);

  // State for each input field
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  // onSubmit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate input
    if (
      !username ||
      !email ||
      !oldPassword ||
      !newPassword ||
      !repeatNewPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== repeatNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    //handle the profile update logic (API call)
    try {
      const response = await fetch(`${SERVER_URL}/updateUserInfo.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user?.id,
          username: username,
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Profile updated successfully! Please sign in again.");
        // Navigate to sign in page
        navigate("/");
      } else {
        alert(data.message); // Show error if update fails
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#EEEEEE]'>
      {/* Profile Update Container */}
      <div className='font-poppins rounded-xl h-[568px] w-[395px] bg-[#ffffff]'>
        <h1 className='text-center text-xl text-[22px] font-bold pt-12'>
          Update Profile
        </h1>

        {/* Form */}
        <form
          className='flex flex-col items-center pt-12 text-[13px]'
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
            labelText='Email'
            type='email'
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <CustomInput
            labelText='Type Old Password'
            type='password'
            value={oldPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOldPassword(e.target.value)
            }
          />
          <CustomInput
            labelText='Type New Password'
            type='password'
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            }
          />
          <CustomInput
            labelText='Repeat New Password'
            type='password'
            value={repeatNewPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRepeatNewPassword(e.target.value)
            }
          />

          <button
            type='submit'
            className='w-[309px] h-[50px] mt-8 rounded-3xl bg-[#1EB2E8] text-white font-bold'
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserEditProfile;
