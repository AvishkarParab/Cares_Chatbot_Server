const asyncHandler = require("express-async-handler");
const con = require("../db/connection")
const mysql = require("mysql")

//Login admin
const login = asyncHandler(async (req,res) =>{
    const {phone,password} = req.body;
    if(!phone || !password){
        res.status(400).send({message:"Incomplete Details"})
    }

    let loginQuery = "select * from admin where ?? = ? and ?? = ?";
    let query = mysql.format(loginQuery,["phone",phone,"password",password]);

    con.query(query,(error,result)=>{
        if(error){
            res.status(400)
            res.json({message:"Login failed"})
        }
        if(result.length>0){
                res.status(200).json({
                    message:"Login successful",
                    result:result
                }); 
        }else{
            res.status(400)
            res.json({message:"Login failed"})
        }

    });

})

//Register admin
const register = asyncHandler(async (req,res) =>{
    const {name,email,phone,password} = req.body;
    if(!name || !email || !phone || !password){
        res.status(400).send({message:"Incomplete Details"})
    }

    let registerQuery = "insert into admin(??,??,??,??) values(?,?,?,?)";
    let query = mysql.format(registerQuery,["name","email","password","phone",name,email,password,phone]);

    con.query(query,(error,result)=>{
        if(error){
            res.status(400)
            res.json({message:"Registration failed"})
        }
        if(result){
                res.status(200).json({
                    message:"Login successful",
                    result:result
                }); 
        }else{
            res.status(400)
            res.json({message:"Register failed"})
        }

    });

})

module.exports ={
    login,
    register
}