import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Signup = ({ setActiveLink }) => {
  const [step, setStep] = useState(1); // Step progression
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate(); // To navigate after successful signup

  const handleNextStep = () => {
    if (step === 1 && name) {
      setStep(2); // Move to next step if name is filled
    } else if (step === 2 && email) {
      setStep(3); // Move to next step if email is filled
    } else if (step === 3 && password) {
      setStep(4); // Move to next step if password is filled
    }
  };

  const handleBackStep = () => {
    if (step > 1) {
      setStep(step - 1); // Go back one step
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5002/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Store the token in localStorage or context
        localStorage.setItem('token', data.authtoken);
        navigate('/'); // Redirect user to / after successful signup
      } else {
        alert('User already exists or other error');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account Now</h2>

        {step > 1 && (
          <button
            type="button"
            className="flex items-center text-blue-500 mb-4"
            onClick={handleBackStep}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </button>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Full Name */}
          {step >= 1 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {step === 1 && (
                <button
                  type="button"
                  className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              )}
            </div>
          )}

          {/* Step 2: Email */}
          {step >= 2 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {step === 2 && (
                <button
                  type="button"
                  className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              )}
            </div>
          )}

          {/* Step 3: Password */}
          {step >= 3 && (
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* Eye icon to toggle password visibility */}
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              />
              {step === 3 && (
                <button
                  type="button"
                  className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  onClick={handleNextStep}
                >
                  Next
                </button>
              )}
            </div>
          )}

          {/* Step 4: Confirm Password */}
          {step === 4 && (
            <div className="mb-4 relative">
              <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Your Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {/* Eye icon to toggle confirm password visibility */}
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              >
                Sign Up
              </button>
            </div>
          )}

          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline" onClick={() => setActiveLink("Log In")}>
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
