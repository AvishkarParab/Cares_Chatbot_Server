const express = require("express");
const router = express.Router();
const {
    getCourse

} = require("../controllers/courseController")
// const {protect} = require("../middleware/authMiddleware");


//get all courses
router.get("/course",getCourse);


module.exports = router;