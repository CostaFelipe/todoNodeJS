'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        require: true,
        trim: true
    }
});

module.exports = mongoose.model('Todo', schema);