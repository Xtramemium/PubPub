const Menu = require('../models/Menu');

async function addMenuPosition(post) {
	const newMenuPos = await Menu.create(post);

	return newMenuPos;
}

async function editMenuPosition(id, post) {
	const updatedMenuPos = await Menu.findByIdAndUpdate(id, post, { returnDocument: 'after' });

	return updatedMenuPos;
}

function deleteMenuPosition(id) {
	return Menu.deleteOne({ _id: id });
}

async function getWholeMenu(search = '') {
	const [menuPositions, count] = await Promise.all([
		Menu.find({ title: { $regex: search, $options: 'i' } }),
		Menu.countDocuments({ title: { $regex: search, $options: 'i' } }),
	]);

	return {
		positions: menuPositions,
	};
}

function getSingleMenuPos(id) {
	return Menu.findById(id);
}

module.exports = {
	addMenuPosition,
	editMenuPosition,
	deleteMenuPosition,
	getWholeMenu,
	getSingleMenuPos,
};
