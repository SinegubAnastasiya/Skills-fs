const fs = require('fs');
const json = fs.readFileSync('./src/storage.json');
const arr = JSON.parse(json);

function writeSkills(data) {
  fs.writeFileSync('./src/storage.json', JSON.stringify(data));
}

function getAllSkills() {
  if (!arr.length) throw new Error('Array is empty');
  return arr;
}

function getSkillById(id) {
  const filtered = arr.filter(el => el.id == id);
  if (!filtered.length) throw new Error('Such id not found');
  return filtered[0];
}

function createSkill(title) {
  const filtered = arr.filter(el => el.title == title);
  if (filtered.length) throw new Error('Such title has already existed');
  const newObj = { id: arr.length + 1, title };
  arr.push(newObj);
  writeSkills(arr);
  return arr;
}

function updateSkillById(id, title) {
  const index = arr.findIndex(el => el.id == id);
  if (index < 0) throw new Error('Skill with such id not found');
  const newSkill = { id, title };
  arr[index] = newSkill;
  writeSkills(arr);
  return arr;
}

function deleteSkillById(id) {
  const filtered = arr.filter(el => el.id != id);
  if (filtered.length == arr.length) throw new Error('Such id not found');
  writeSkills(filtered);
  return filtered;
}

module.exports = { getAllSkills, getSkillById, createSkill, updateSkillById, deleteSkillById };
