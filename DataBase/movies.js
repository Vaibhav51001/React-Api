const mongoose = require('mongoose');

// Creating Schema for movies
const bmsmovies = mongoose.Schema({
    imageurl: String,
    title: String,
    genre: String
});

const Moviesmodel = mongoose.model("movies", bmsmovies);

module.exports = Moviesmodel;