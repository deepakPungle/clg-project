const mongoose = require('mongoose');

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>console.log("DATABASE CONNECTION SUCESSFULL"))
    .catch((err)=>{
        console.log("ISSUE IN DB CONNECTION");
        console.error(err.message);
        process.exit(1);
    });
}

module.exports = dbconnect;