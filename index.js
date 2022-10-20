var express = require("express")
var cors = require("cors");
var app = express();
var dotenv = require("dotenv").config();
require("./db/connection")
var port = process.env.PORT || 5000;
var Routes = require("./routes");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
// app.use(cookieParser())




app.use("/",Routes);
app.get("/", (req, res) => {
    res.send(`app working ` + new Date().toLocaleTimeString());
});


app.listen(port,()=>{
    console.log("The server is started " + port);
})