const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data)
    res.send(JSON.parse(data));
  } )
});

router.post("/", (req, res) => {
  //grab data from req.body to get what is in front end.
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data)
    // parse data and push req.body (new array)
    // call fs.writeFile with new array
  } )
});

module.exports = router;
