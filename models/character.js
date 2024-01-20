'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Character extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}

	Character.init({
			id: {
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
				type: DataTypes.INTEGER,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			class: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			race: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mainSpec: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			offSpec: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			gearScore: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			iccSaved: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			rsSaved: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		}, {
			sequelize,
			modelName:
				'Character',
		}
	);
	return Character;
};