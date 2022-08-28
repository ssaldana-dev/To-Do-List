const chores = document.querySelector('#chores');
const addButton = document.querySelector('#add-task-button');
const message = document.querySelector('#message');
const banner = document.querySelector('#chores-banner');
const bannerInput = document.querySelector('#input');

addButton.addEventListener('click', addTask);

function isScheduleEmpty () {
    if (chores.childElementCount == 1) {
        message.style.display = 'block';
    }
}

function addTask () {
    message.style.display = 'none';
    if (bannerInput.value == '') {
        alert('Please write something');
    } else {
        const task = createTask(bannerInput.value);
        chores.append(task);
        bannerInput.value = '';
    }
}

function createTask (text) {
    const newTask = document.createElement('article');
    const taskCheck = document.createElement('input');
    const taskSpan = document.createElement('span');
    const taskText = document.createTextNode(text);
    const taskRemove = document.createElement('button');
    const removeIcon = document.createElement('img');

    newTask.classList.add('chores__item');
    taskCheck.classList.add('chores__item__checkbox');
    taskSpan.classList.add('chores__item__text');
    taskRemove.classList.add('chores__item__remove');

    removeIcon.setAttribute('src', './assets/delete-icon.svg');
    taskCheck.setAttribute('type', 'checkbox');
    taskRemove.setAttribute('onClick', 'this.parentElement.remove(); isScheduleEmpty();');

    newTask.append(taskCheck);
    newTask.append(taskSpan);
    newTask.append(taskSpan);
    newTask.append(taskRemove);
    taskSpan.append(taskText);
    taskRemove.append(removeIcon);

    return newTask;
}

document.addEventListener('keyup', add);

function add(event) {
    if (event.keyCode == 13) {
        addTask();
    }
}