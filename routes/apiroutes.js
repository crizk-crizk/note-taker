//const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data)
    data =JSON.parse(data);
    res.send(data);
  } )
});

//Accept information from page by listening to save button click.
router.post("/", (req, res) => {
  //grab data from req.body to get what is in front end.
  let newNote = req.body;
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) =>{
    if (err) throw err;
    //console.log(data)
    // parse data and push req.body (new array)
    data =JSON.parse(data);
    //adding ids to notes
    newNote.id = data[data.length-1].id + 1;
    data.push(newNote);
    console.log(data);
    // call fs.writeFile with new array
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) => {
      if (err) throw err;
      res.send(data);
    })
  } )
});

//delete notes
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params["id"]);
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    data = JSON.parse(data);
    data = data.filter((note) => note.id !== id);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err) => {
      if (err) throw err;
      res.send(data);
    });
  });
});

module.exports = router;
