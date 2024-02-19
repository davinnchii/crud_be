const { Character } = require('../models');

const getAll = async ({ offset, limit }) => {
	const params = { offset, limit };

	const data = await Character.findAndCountAll(params);

	return data;
}

const getCharacter = async (id) => {
	const data = await Character.findByPk(id);

	return data;
}

const updateCharacter = async (id, options) => {
	const character = await getCharacter(id);
	character.
}

module.exports = { getAll }