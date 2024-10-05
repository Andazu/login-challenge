import React, { useState } from "react";
import CustomInput from "../components/CustomInput";

const UserEditProfile: React.FC = () => {
  // State for each input field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  // onSubmit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    console.log("Updating profile...");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Old Password:", oldPassword);
    console.log("New Password:", newPassword);
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
            type='submit' // Set button type to 'submit'
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
