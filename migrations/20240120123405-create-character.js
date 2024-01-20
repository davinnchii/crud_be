'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Characters', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			class: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			race: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mainSpec: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			offSpec: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			gearScore: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			iccSaved: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			rsSaved: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Characters');
	}
};