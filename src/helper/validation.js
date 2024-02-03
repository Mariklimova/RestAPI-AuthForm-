function IsValidUserId(req, _res, next) {
    const { id } = req.params;
    if(typeof id !='number'&& typeof id !='string')throw new Error('type id not valid');
    if(isNaN(id))throw new Error('id not number');
    if (id <= 0) throw new Error('id <= 0')
    next();
}

function IsValidUser(req, _res,next) {
    
}

module.exports = {IsValidUserId}