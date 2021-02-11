const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  //send back the index.html
  res.sendFile(path.join(`${__dirname}/public/index.html`));
})


app.use(`/api/notes`, apiRoutes);
app.use(`/notes`, htmlRoutes);

//

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
