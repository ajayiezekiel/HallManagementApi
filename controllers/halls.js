// @desc      Get all halls
// @route     GET /api/v1/halls
// @access    Public
exports.getHalls = (req, res, next) => {
    res.status(200).json({success:true, msg: 'Get all halls'})
};

// @desc      Get hall
// @route     GET /api/v1/halls/:id
// @access    Public
exports.getHall = (req, res, next) => {
    res.status(200).json({success:true, msg: `Get hall ${req.params.id}`})
};

// @desc      Create hall
// @route     POST /api/v1/halls
// @access    Private
exports.createHall = (req, res, next) => {
    res.status(200).json({success:true, msg: 'Create hall'})
};

// @desc      Update hall
// @route     PUT /api/v1/halls/:id
// @access    Private
exports.updateHall = (req, res, next) => {
    res.status(200).json({success:true, msg: `Update hall ${req.params.id}`})
};

// @desc      Delete hall
// @route     DELETE /api/v1/halls/:id
// @access    Private
exports.deleteHall = (req, res, next) => {
    res.status(200).json({success:true, msg: `Delete hall ${req.params.id}`})
};

