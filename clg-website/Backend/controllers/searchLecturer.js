const Lectures = require("../models/lecturers");

exports.searchLecturer = async (req, res) => {
    try {
        const lecturers = await Lectures.find({});
        res.status(200).json({
            success: true,
            data: lecturers,
            message: "All lecturers fetched successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};
