function IsValidUserId(req, _res, next) {
    const { id } = req.params;
    if(isNaN(id))throw new Error('id not number');
    if (id <= 0) throw new Error('id <= 0')
    next();
}

module.exports = {IsValidUserId}