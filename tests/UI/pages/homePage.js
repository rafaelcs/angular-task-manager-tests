'use strict';

const BasePage = require('./basePage.js');

const HomePage = function () {

	const basePage = new BasePage();

	// Locators to create/edit a new task
	this.newTaskButton = element(by.buttonText('New Task'));
	this.newTaskTitle = element(by.id('input-title'));
	this.newTaskDescription = element(by.id('input-description'));
	this.newTaskEstimate = element(by.id('input-estimate'));
	this.newTaskStatus = element(by.id('input-status'));
	this.newTaskCreateButton = element(by.buttonText('Create'));
	this.editTaskSaveButton = element(by.buttonText('Save'));
	this.deleteButton = element(by.css('.btn.btn-link.delete'));
	this.closeModalButton = element(by.css('.close'));

	// Homepage locators
	this.plannedTasksList = element.all(by.css('.card-block')).first();
	this.completedTasksList = element.all(by.css('.card-block')).last();
	this.editTaskButton = element(by.css('.task-actions'));

	this.fillTaskForm = function (taskObj) {
		this.newTaskTitle.clear();
		this.newTaskTitle.sendKeys(taskObj.titleValue);
		this.newTaskDescription.clear();
		this.newTaskDescription.sendKeys(taskObj.descriptionValue);
		this.newTaskEstimate.clear();
		this.newTaskEstimate.sendKeys(taskObj.estimateValue);
		basePage.selectDropdown(this.newTaskStatus, taskObj.statusValue);
	};
};

module.exports = HomePage;
