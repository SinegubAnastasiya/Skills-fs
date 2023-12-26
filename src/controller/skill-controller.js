const { Router } = require('express');
const route = Router();
const { getAllSkills, getSkillById, createSkill, updateSkillById, deleteSkillById } = require('../service/skill-service');
const { isValidSkillId, isValidTitle } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

route.get('/', (req, res) => {
  try {
    buildResponse(res, 200, getAllSkills());
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;

    buildResponse(res, 200, getSkillById(id));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/', isValidTitle, (req, res) => {
  try {
    const { title } = req.body;
    buildResponse(res, 200, createSkill(title));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidSkillId, isValidTitle, (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    buildResponse(res, 200, updateSkillById(id, title));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidSkillId, (req, res) => {
  try {
    const { id } = req.params;
    buildResponse(res, 200, deleteSkillById(id));
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
