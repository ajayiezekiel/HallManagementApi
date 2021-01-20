// @desc      Get all bookings by a user
// @route     GET /api/v1/bookings
// @access    Public
exports.getBookings = (req, res, next) => {
    res.status(200).json({success:true, msg: `Get all bookings made by a user`})
};