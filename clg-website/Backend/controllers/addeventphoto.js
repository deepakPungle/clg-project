const EventPhotoSchema = require("../models/eventphoto");

exports.addEventPhoto = async(req,res) => {
    try {
        const { photourl,EventName } = req.body;
        const response = await EventPhotoSchema.create({ photourl,EventName });
        res.status(200).json({
            success: true,
            data: response,
            message: 'Photo added Sucessfully',
        });
    } catch (err) {
        console.error(err);
        console.log(err); // Corrected typo here
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message,
        });
    }
};
