const express = require("express");
const router = express.Router();

// Import the addLecture function from the controller file
const { addLecture } = require("../controllers/addLectures");

const { searchLecturer } = require("../controllers/searchLecturer");

const {addEventPhoto} = require("../controllers/addeventphoto");

// Define the API route for adding lectures
router.post("/addLectures", addLecture);

// Define the API route for fetching lectures
router.get("/searchLecturer", searchLecturer);

//Define the API route for posting the event photo
router.post("/addEventPhoto",addEventPhoto)

// Export the router for use in other files
module.exports = router;
