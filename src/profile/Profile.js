import React, { useEffect, useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineFund,
  AiOutlineLogout,
  AiOutlineCamera,
} from "react-icons/ai";
import { FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = ({ onProfileClick }) => {
  const [username, setUsername] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("https://via.placeholder.com/50"); // Default placeholder URL
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Fetch user details from the backend
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
          setProfilePhoto(user.profilePhoto || "https://via.placeholder.com/50");
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

  // Fetch user details on component mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Handle image upload
  const handleImageUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("profilePhoto", selectedFile);

    try {
      const response = await fetch("http://localhost:5002/api/auth/uploadphoto", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setProfilePhoto(data.profilePhotoUrl); // Update the profile photo URL
      } else {
        console.error("Error uploading image:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Set the selected file here
    } else {
      console.error("No file selected");
    }
  };

  // Handle upload click
  const handleUploadClick = () => {
    handleImageUpload();
  };

  return (
    <div className="relative">
      {/* Profile section */}
      <div className="profile-icon flex flex-col items-center text-lg lg:text-xl font-medium px-4 leading-snug transition-all duration-200 cursor-pointer">
        <div className="w-[50px] h-[50px] bg-[#f3f5f9] rounded-full flex items-center justify-center mb-2">
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/50"; // Fallback placeholder image
            }}
            onClick={toggleDropdown}
          />
        </div>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white text-black border border-gray-200 rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out opacity-100 z-50"
          style={{ animation: isDropdownOpen ? "slideDown 0.3s ease-in-out" : "slideUp 0.3s ease-in-out" }}
        >
          <ul className="py-4 space-y-4 text-lg">
            {/* Username */}
            <li className="flex items-center px-4 py-2 font-semibold">
              <span>{username}</span>
            </li>

            {/* Upload Photo */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200">
              <AiOutlineCamera className="text-blue-500" />
              <label className="cursor-pointer flex-1">
                <span>Upload Photo</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
              <button onClick={handleUploadClick} className="text-blue-500 font-medium">Upload</button>
            </li>

            {/* Wishlist */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200" onClick={onProfileClick}>
              <AiOutlineHeart className="text-red-500" />
              <span>Wishlist</span>
            </li>

            {/* Cart */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200" onClick={onProfileClick}>
              <AiOutlineShoppingCart className="text-green-500" />
              <span>Cart</span>
            </li>

            {/* Fund */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200" onClick={onProfileClick}>
              <AiOutlineFund className="text-blue-500" />
              <span>Fund</span>
            </li>

            {/* Currency */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200" onClick={onProfileClick}>
              <FaMoneyBillWave className="text-yellow-500" />
              <span>Currency</span>
            </li>

            {/* Logout Button */}
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer space-x-2 text-lg transition-colors duration-200">
              <AiOutlineLogout className="text-red-500" />
              <button onClick={handleLogout} className="w-full text-left font-medium text-red-600">Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
