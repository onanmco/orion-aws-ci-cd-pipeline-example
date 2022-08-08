const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello from Orion Innovation!");
});

app.listen(3000);