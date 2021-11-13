const express = require("express");
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const User = require('./models/User')

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Successfully Connected to DB"))
    .catch(err => console.log(err));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.get("/", (request, response) => {
    const user = new User({
        username: "Daniel",
        email: "test",
        password: "test"
    })
    user.save();
    response.send("Hello World");
});


app.listen(port, () => console.log(`Server is running on port ${port}`));




