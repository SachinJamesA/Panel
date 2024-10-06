import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineFund } from "react-icons/ai"; // Wishlist, Cart, Fund icons
import { FaMoneyBillWave } from "react-icons/fa"; // Currency icon

const ProfilePage = () => {
  const [username, setUsername] = useState("");

  // Fetch user details
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await fetch("http://localhost:5002/api/auth/getuser", {
          method: "GET",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUsername(user.name);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="profile-page p-6">
      <h1 className="text-3xl font-bold mb-4">{username || "Profile"}</h1>

      {/* Wishlist, Cart, Fund, and Currency Section */}
      <div className="space-y-4">
        {/* Wishlist */}
        <div className="wishlist flex items-center space-x-2 text-lg">
          <AiOutlineHeart className="text-red-500" /> {/* Wishlist icon */}
          <span>Wishlist</span>
        </div>

        {/* Cart */}
        <div className="cart flex items-center space-x-2 text-lg">
          <AiOutlineShoppingCart className="text-green-500" /> {/* Cart icon */}
          <span>Cart</span>
        </div>

        {/* Fund */}
        <div className="fund flex items-center space-x-2 text-lg">
          <AiOutlineFund className="text-blue-500" /> {/* Fund icon */}
          <span>Fund</span>
        </div>

        {/* Currency */}
        <div className="currency flex items-center space-x-2 text-lg">
          <FaMoneyBillWave className="text-yellow-500" /> {/* Currency icon */}
          <span>Currency</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
