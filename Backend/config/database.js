const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbConnect = ()=>  {mongoose.connect(process.env.DB_URL, {})
.then( ()=> {console.log("Database connection successful")} )
.catch( (e)=>{
    console.log(e.message);
    process.exit(1);
} )
}

module.exports = dbConnect;