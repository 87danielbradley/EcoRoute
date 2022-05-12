const path = require('path');

const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const events = require("./routes/api/events");
// const User = require('./models/User')

require('dotenv').config()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Successfully Connected to DB"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/messages", messages);
app.use("/api/events", events);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));




