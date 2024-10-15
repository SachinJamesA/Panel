require("dotenv").config(); // Ensure to add this at the top of your file
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const JWT_SECRET = process.env.JWT_SECRET // Fallback for development

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/');  // folder to store uploaded files
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);  // unique name for each file
  }
});

// Initialize upload with storage settings
// const upload = multer({
//   storage: storage,
//   // limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
// });

const upload = multer({ dest: 'uploads/' }); // Simplified example

// POST route to handle file upload (General)
router.post('/api/auth/uploadphoto', upload.single('profilePhoto'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No file uploaded' });
  }
  const fileUrl = `/uploads/${req.file.filename}`; // Construct the file URL
  res.send({ profilePhotoUrl: fileUrl });
});

const uploadPhoto = (req, res) => {
  console.log("Received file:", req.file); // Check if file is received
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  
  // Process the uploaded file and send a response
  // For example, saving the file URL to the database
  const fileUrl = `http://localhost:5002/uploads/${req.file.filename}`; // Construct file URL
  res.status(200).json({ profilePhotoUrl: fileUrl });
};


// ROUTE 1: Create a user
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;

    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      // Check if user exists
      let existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ success, message: "User already exists with this email" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create new user
      const user = new User({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      await user.save();

      const data = { user: { id: user.id } };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// ROUTE 2: Authenticate a user
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password Cannot Be Blank").exists(),
  ],
  async (req, res) => {
    let success = false;

    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success, message: "Invalid credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success, message: "Invalid credentials" });
      }

      const data = { user: { id: user.id } };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// ROUTE 3: Get Logged-in User Details
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    // Find user by ID from the token
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); // Exclude password
    res.send(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// ROUTE 4: Upload profile photo
// router.post("/uploadphoto", fetchuser, upload.single("profilePhoto"), async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ msg: "No file uploaded" });
//   }

//   try {
//     const user = await User.findById(req.user.id);
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     // Remove previous photo if it exists
//     // if (user.profilePhoto) {
//     //   const previousPhotoPath = path.join(__dirname, "../", user.profilePhoto);
//     //   if (fs.existsSync(previousPhotoPath)) {
//     //     fs.unlinkSync(previousPhotoPath);
//     //   }
//     // }

//     user.profilePhoto = `uploads/${req.file.filename}`; // Save the new profile photo path
//     await user.save();

//     res.json({ msg: "Profile photo uploaded successfully", profilePhoto: user.profilePhoto });
//   } catch (err) {
//     console.error(err.message); // Log the error message
//     res.status(500).send("Server error");
//   }
// });

module.exports = router;
