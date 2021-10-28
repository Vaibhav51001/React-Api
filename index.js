require('dotenv').config()
const Moviesmodel = require('./DataBase/movies.js')
const Usersmodel = require('./DataBase/users')

const express = require("express");

var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

//Import the mongoose module
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED"));


// http://localhost:5000/
app.get("/", (req, res) =>{
    return res.json({"Welcome": `To my backend Software for the BookMyShow.`});
});
// http://localhost:5000/bmovies
app.get("/movies", async (req, res) =>{
    const getAllMovies = await Moviesmodel.find();
    return res.json(getAllMovies);
});
// Here is bookid a variable to routs
// http://localhost:5000/movies/12345Two
app.get("/movies/:id", async (req, res) =>{
    // console.log(req.params);
    const {id} = req.params;
    // console.log(isbn);
    const getSpecificMovie = await Moviesmodel.findOne({_id: id});
    // console.log(getSpecificMovie);
    if(getSpecificMovie===null){
        return res.json({"error": `No Book Found for the ISBN of ${id}`});
    }
    return res.json(getSpecificMovie);
    
});
// Posting 
// http://localhost:5000/users
app.post("/users", async (req, res) =>{
    // console.log(req.body);
    const addNewUser = await Usersmodel.create(req.body);
    return res.json({
        users: addNewUser,
        message: "User Was Added!!!"
    });
});

app.listen(process.env.PORT||5000,() => {
    console.log("My Express App is Running .....");
});

