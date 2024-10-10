import React, { useEffect, useState } from "react";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { useLocation, useNavigate } from "react-router-dom";
import SERVER_URL from "../utils/config";

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

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from the database
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/getAllUsers.php`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setUsers(data); // Update the users state with the fetched data
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run once on mount

  const handleLogout = () => {
    // Redirect to sign-in page
    navigate("/");
  };

  const handleDelete = async (userId: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) return;

    try {
      const response = await fetch(`${SERVER_URL}/deleteUser.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId }),
      });

      const data = await response.json();
      if (data.status === "success") {
        alert(data.message);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId)); // Remove user from state
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // If no user is passed, redirect to sign-in
  if (!user) {
    alert("Please sign in to view this page.");
    navigate("/");
    return null;
  }

  if (user.is_admin === false) {
    alert("User is not an admin.");
    navigate("/");
    return null;
  }

  return (
    <div className='font-poppins flex justify-center w-full h-screen pt-[15%] bg-[#EEEEEE]'>
      {/* container */}
      <div className='flex-row justify-center items-center w-[753px]'>
        <p className='font-bold text-2xl pb-20'>Users</p>
        <div className='flex items-center w-full px-6 pb-2 text-sm'>
          <p className='mr-[250px]'>Name</p>
          <p className='mr-[310px]'>Email</p>
          <p className=''>Delete</p>
        </div>
        {users.map((user) => (
          <div className='rounded-md h-[60px] w-full mb-1 bg-[#ffffff]'>
            <div className='flex items-center w-full h-full px-6'>
              <p className='font-bold w-[293px]'>{user.username}</p>
              <p className='w-[360px]'>{user.email}</p>
              <DeleteIcon
                className='cursor-pointer'
                onClick={() => handleDelete(user.id)}
              />
            </div>
          </div>
        ))}
        <button
          className='absolute left-1/2 bottom-0 mb-20 w-[220px] h-[50px] rounded-3xl border border-[#A4A4A4] text-[#A4A4A4] font-bold transform -translate-x-1/2'
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
