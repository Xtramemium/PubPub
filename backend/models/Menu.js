const mongoose = require('mongoose');
const validator = require('validator');


const MenuSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	weight: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: true,
		validate: {
			validator: validator.isURL,
			message: 'У изображения должен быть верный URL',
		},
	},
	content: {
		type: String,
		required: true,
	},
}, { timestamps: true });

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;