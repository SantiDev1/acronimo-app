const express = require("express");
const app = express();
const cors = require("cors");
const AcronimoController = require("./app/controllers/acronimoController");

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get('/api', AcronimoController.search);
app.post("/create", AcronimoController.create);
app.get("/getdata", AcronimoController.getData);

app.listen(3001, ()=> {
    console.log("Puerto corriendo en 3001")
});
