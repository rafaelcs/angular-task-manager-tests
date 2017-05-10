'use strict';

const HomePage = require('../pages/homePage.js');
const BasePage = require('../pages/basePage.js');
const taskData = require('../data/taskData.js');

describe('Create a new task >', () => {

	const homePage = new HomePage();
	const basePage = new BasePage();

	beforeAll(function() {
		basePage.visit();
	});

	it('should open new task modal', () => {
		homePage.newTaskButton.click();
	});

	it('should fill task form', () => {
		homePage.fillTaskForm(taskData.newTask);
		homePage.newTaskCreateButton.click();
		basePage.isNotVisible(homePage.newTaskCreateButton), basePage.timeout.xxl;
	});

	it('should assert that the task was created in the \'planned\' column', () => {
		expect(homePage.plannedTasksList.getText()).toContain(taskData.newTask.titleValue);
	});
});

describe('Edit the task >', () => {

	const homePage = new HomePage();
	const basePage = new BasePage();

	it('should open task created', () => {
		basePage.displayElement(homePage.editTaskButton);
		homePage.editTaskButton.click();
	});

	it('should fill task form with new values', () => {
		homePage.fillTaskForm(taskData.editTask);
		homePage.editTaskSaveButton.click();
		basePage.isNotVisible(homePage.editTaskSaveButton), basePage.timeout.xxl;
	});

	it('should assert that the task has been moved to the \'completed\' column with new title', () => {
		expect(homePage.completedTasksList.getText()).toContain(taskData.editTask.titleValue);
	});

	it('should open task edited', () => {
		basePage.displayElement(homePage.editTaskButton);
		homePage.editTaskButton.click();
	});

	it('should assert that new values have been added', () => {
		expect(homePage.newTaskTitle.getAttribute('value')).toContain(taskData.editTask.titleValue);
		expect(homePage.newTaskDescription.getAttribute('value')).toContain(taskData.editTask.descriptionValue);
		expect(homePage.newTaskEstimate.getAttribute('value')).toContain(taskData.editTask.estimateValue);
		// Close the modal
		homePage.closeModalButton.click();
	});
});

describe('Remove the task >', () => {

	const homePage = new HomePage();
	const basePage = new BasePage();

	it('should open task edited', () => {
		basePage.displayElement(homePage.editTaskButton);
		homePage.editTaskButton.click();
	});

	it('should click to delete the task', () => {
		homePage.deleteButton.click();
	});

	it('should assert that the task has been deleted', () => {
		expect(homePage.completedTasksList.getText()).toContain('No tasks.');
	});
});