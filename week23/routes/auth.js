const express = require("express");

const router = express.Router();

router.post("/login",(req,res)=>{

const accessToken =
"ACCESS_TOKEN";

const refreshToken =
"REFRESH_TOKEN";

res.json({

message: "Login successful",

accessToken,

refreshToken

});

});

module.exports = router;