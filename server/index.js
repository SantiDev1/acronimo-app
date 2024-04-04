const express = require("express");
const app = express();
const cors = require("cors");
const acronimoRoutes = require("./app/routes/acronimoRoutes");

app.use(cors({
    origin: '*'
}));
app.use(express.json());



app.use('/api', acronimoRoutes);

app.listen(3001, ()=> {
    console.log("Puerto corriendo en 3001")
});
