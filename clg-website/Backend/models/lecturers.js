const mongoose = require('mongoose');

const LecturesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    Department:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    designation:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model("Lectures", LecturesSchema);
