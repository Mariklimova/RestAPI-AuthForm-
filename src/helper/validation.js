function IsValidUserId(req, _res, next) {
    const { id } = req.params;
    if (id <= 0) throw new Error('id <= 0')
    next();
}