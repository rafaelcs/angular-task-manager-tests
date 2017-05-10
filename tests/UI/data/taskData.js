let casual = require('casual');

const TaskData = { 

	newTask : {
		titleValue: casual.title, 
		descriptionValue: casual.description, 
		estimateValue: casual.integer(from = 1, to = 10), 
		statusValue: 'Planned'
	},

	editTask : {
		titleValue: casual.title, 
		descriptionValue: casual.description, 
		estimateValue: casual.integer(from = 1, to = 10), 
		statusValue: 'Completed'
	}
};

module.exports = TaskData;