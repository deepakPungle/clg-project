const Lectures = require("../models/lecturers");

exports.addLecture = async(req,res) => {
    try {
        const { name, Department, image, designation } = req.body;
        const response = await Lectures.create({ name, Department, image, designation });
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry created successfully',
        });
    } catch (err) {
        console.error(err);
        console.log(err); 
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message,
        });
    }
};
