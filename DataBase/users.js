const mongoose = require('mongoose');

// Creating Schema for movies
const bmsusers = mongoose.Schema({
    username: String,
    emailid: String,
    password: String
    
});

const Usersmodel = mongoose.model("users", bmsusers);

module.exports = Usersmodel;