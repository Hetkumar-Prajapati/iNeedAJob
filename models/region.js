// import mongoose 
const mongoose = require('mongoose')

// define a schema for a region 
var regionSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: 'Region name is required'
    }
})

// make public
module.exports = mongoose.Model('Region', regionSchema)