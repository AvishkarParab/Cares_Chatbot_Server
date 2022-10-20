const asyncHandler = require("express-async-handler");

const getCourse = asyncHandler(async (req,res) =>{
    res.send("Helloo Get Course");
})


module.exports ={
    getCourse,
}