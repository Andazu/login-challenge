import React from "react";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface User {
  id: number;
  username: string;
  email: string;
  is_admin: boolean;
}

const UserProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state?.user as User | undefined;

  const handleLogout = () => {
    // Redirect to sign-in page
    navigate("/");
  };

  // If no user is passed, redirect to sign-in
  if (!user) {
    alert("Please sign in to view this page.");
    navigate("/");
    return null;
  }

  return (
    <div className='flex justify-center items-center w-full h-screen bg-[#EEEEEE]'>
      {/* Login container */}
      <div className='font-poppins relative rounded-xl h-[355px] w-[400px] bg-[#ffffff]'>
        <EditIcon
          className='absolute top-6 right-6'
          onClick={() =>
            navigate("/usereditprofile", { state: { user: user } })
          }
        />

        <div className='flex flex-col justify-center items-start h-full mx-14 pb-8'>
          <h1 className='text-xl text-[22px] font-bold mb-8'>
            {user.username}
          </h1>

          {/* Container for Email and Password sections */}
          <div className='flex space-x-7 w-full'>
            {/* Left side (labels) */}
            <div className='flex flex-col space-y-8'>
              <h2 className='font-bold text-sm'>Email</h2>
              <h2 className='font-bold text-sm'>Password</h2>
            </div>

            {/* Right side (values) */}
            <div className='flex flex-col space-y-8'>
              <h3 className='text-sm'>{user.email}</h3>
              <h3 className='text-sm'>************</h3>
            </div>
          </div>
        </div>
      </div>

      <button
        className='absolute bottom-0 mb-20 w-[220px] h-[50px] rounded-3xl border border-[#A4A4A4] text-[#A4A4A4] font-bold'
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default UserProfile;
