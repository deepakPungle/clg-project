const mongoose = require('mongoose');
const EventPhotoSchema = new mongoose.Schema(
    {
        photourl:{
            type:String,
            required:true,
        },
        EventName:{
            type:String,
            required:true,
        }
    }
);


module.exports = mongoose.model("EventPhotoSchema", EventPhotoSchema);