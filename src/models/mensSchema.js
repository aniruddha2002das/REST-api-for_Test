const mongoose = require('mongoose');

const mensSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    ranking: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
});

// Creating collection
const menRanking = new mongoose.model('menRanking', mensSchema);

module.exports = menRanking;
