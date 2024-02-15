const express = require('express');
const cors = require('cors');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

const dbconnect = require("./config/database");
dbconnect(); 
app.use(express.json());
app.use(cors());
    const LectureRoute = require("./routes/lectures");
    app.use("/v1", LectureRoute);





app.get('/', (req, res) => {
    res.send("Hello Brother");
});

app.listen(PORT, () => {
    console.log(`Server is Started at the port ${PORT}`);
});
