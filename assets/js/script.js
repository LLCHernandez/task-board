let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
        let projects = JSON.parse(localStorage.getItem('projects'));
        if (!projects) {
          projects = [];
        }
        return projects;
    }
// Todo: create a function to create a task card
function createTaskCard(task) {
        const taskCard = $('<div>').addClass('card project-card draggable my-3').attr('data-project-id', task.id);
        const cardHeader = $('<div>').addClass('card-header h4').text(task.name);
        const cardBody = $('<div>').addClass('card-body');
        const cardDescription = $('<p>').addClass('card-text').text(task.type);
        const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
        const cardDeleteBtn = $('<button>')
          .addClass('btn btn-danger delete')
          .text('Delete')
          .attr('data-project-id', task.id);
        cardDeleteBtn.on('click', handleDeleteProject);
        if (task.dueDate && task.status !== 'done') {
          const now = dayjs();
          const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
          if (now.isSame(taskDueDate, 'day')) {
            taskCard.addClass('bg-warning text-white');
          } else if (now.isAfter(taskDueDate)) {
            taskCard.addClass('bg-danger text-white');
            cardDeleteBtn.addClass('border-light');
          }
        }
        cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
        taskCard.append(cardHeader, cardBody);
        return taskCard;
    }

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
        const projects = generateTaskId();
        const todoList = $('#todo-cards');
        todoList.empty();
        const inProgressList = $('#in-progress-cards');
        inProgressList.empty();
        const doneList = $('#done-cards');
        doneList.empty();
        for (let project of projects) {
          if (project.status === 'to-do') {
            todoList.append(createProjectCard(project));
          } else if (project.status === 'in-progress') {
            inProgressList.append(createProjectCard(project));
          } else if (project.status === 'done') {
            doneList.append(createProjectCard(project));
          }
        }
    }

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});