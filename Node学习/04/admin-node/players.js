const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbPath = './db.json';

mongoose.connect('mongodb://localhost/test', {
    useMongoClient: true
});
const players = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    level: {
        type: String
    },
    gener: {
        type: Number,
        enum: [0, 1], //在0和1中选择
        default: 0 //默认是0
    }
});
let Players = mongoose.model('Player', players);

module.exports = Players;