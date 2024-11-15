const express = require("express");
const cors = require("cors")
const dbConnect = require("./config/database");
const router = require("./routes/todos");
const app = express();

require("dotenv").config()
const PORT = process.env.PORT || 4000

dbConnect();

app.use(express.json());
app.use(cors())
app.use("/api/v1", router)

app.listen(PORT, ()=> {
    console.log(`server is listening on port no ${PORT}`);
})