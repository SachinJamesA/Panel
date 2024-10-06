import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineFund } from "react-icons/ai"; // Wishlist, Cart, Fund icons
import { FaMoneyBillWave } from "react-icons/fa"; // Currency icon

const Profile = ({ onProfileClick }) => {
  const [username, setUsername] = useState(""); // State to store username
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  // Function to fetch user details from the backend
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (token) {
      try {
        const response = await fetch("http://localhost:5002/api/auth/getuser", {
          method: "GET",
          headers: {
            "auth-token": token, // Send token in the headers
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const user = await response.json(); // Parse user details
          setUsername(user.name); // Set username in the state
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fetch user details when the component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="relative" onClick={toggleDropdown}>
      {/* Profile Icon that toggles the dropdown */}
      <div className="profile-icon flex flex-col items-center text-lg lg:text-xl font-medium hover:text-[#4668DF] px-4 leading-snug transition-all duration-200 cursor-pointer">
        <div className="w-[50px] h-[50px] bg-[#f3f5f9] rounded-full flex items-center justify-center mb-2">
          <i className="fa fa-user text-2xl text-gray-700 hover:text-blue-500 transition duration-300"></i>
        </div>
        <div className="flex items-center text-gray-700">
          <span>{username || "Profile"}</span>
          <i
            className={`fa ${
              isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"
            } ml-2 text-sm transition-all duration-300`}
          ></i>
          {/* Arrow down icon */}
        </div>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <ul className="py-2 space-y-2">
            {/* Wishlist */}
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg"
              onClick={onProfileClick}
            >
              <AiOutlineHeart className="text-red-500" /> {/* Wishlist icon */}
              <span>Wishlist</span>
            </li>

            {/* Cart */}
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg"
              onClick={onProfileClick}
            >
              <AiOutlineShoppingCart className="text-green-500" />{" "}
              {/* Cart icon */}
              <span>Cart</span>
            </li>

            {/* Fund */}
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg"
              onClick={onProfileClick}
            >
              <AiOutlineFund className="text-blue-500" /> {/* Fund icon */}
              <span>Fund</span>
            </li>

            {/* Currency */}
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg"
              onClick={onProfileClick}
            >
              <FaMoneyBillWave className="text-yellow-500" />{" "}
              {/* Currency icon */}
              <span>Currency</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
