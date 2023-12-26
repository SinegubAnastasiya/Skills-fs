function isValidSkillId(req, res, next) {
  const { id } = req.params;

  if (typeof id !== 'number' && typeof id !== 'string') throw new Error('Id is not a number or string');
  if (isNaN(id)) throw new Error('Id is not a number');
  if (id < 0) throw new Error('Id is less than 0');
  if (!id) throw new Error('Id is empty');

  next();
}

function isValidTitle(req, res, next) {
  // eslint-disable-next-line no-prototype-builtins
  if (!req.body.hasOwnProperty('title')) throw new Error('Field title not found in the storage');

  const { title } = req.body;
  if (!title) throw new Error('Title not found');
  if (!isNaN(title)) throw new Error('Title is not a string');

  next();
}

module.exports = { isValidSkillId, isValidTitle };
