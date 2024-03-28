function IsValidUserId(req, _res, next) {
  const { id } = req.params;
  if (typeof id != 'number' && typeof id != 'string') throw new Error('type id not valid');
  if (isNaN(id)) throw new Error('id not number');
  if (id <= 0) throw new Error('id <= 0');
  next();
}

function IsValidUser(req, _res, next) {
  const { username, email, phone, pwd } = req.body;

  if (req.body.hasOwnProperty(username)) throw new Error('username is underfind');
  if (req.body.hasOwnProperty(email)) throw new Error('email is underfind');
  if (req.body.hasOwnProperty(phone)) throw new Error('phone is underfind');
  if (req.body.hasOwnProperty(pwd)) throw new Error('password is underfind');
  if (typeof username != 'string') throw new Error('type username not valid');
  if (typeof email != 'string') throw new Error('type email not valid');
  if (typeof phone != 'string') throw new Error('type phone not valid');
  if (typeof pwd != 'string') throw new Error('type password not valid');
  if (!isNaN(username)) throw new Error('username not string');
  if (!/^\w+@[a-z]+\.[a-z]{2,5}$/gm.test(email)) throw new Error('email not valid');
  if (!/^\+\d{12}$/gm.test(phone)) throw new Error('phone not valid');
  if (!/^\w{8,}/gm.test(pwd)) throw new Error('password not valid');

  next();
}

module.exports = { IsValidUserId, IsValidUser };
