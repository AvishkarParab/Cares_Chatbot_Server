const express = require("express");
const router = express.Router();
const course = require("./course");
const modu = require("./module");
const adm = require("./admin");




router.use("/course",course)

router.use("/module",modu)

router.use("/admin",adm)






module.exports = router;
