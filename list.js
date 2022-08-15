const chores = document.querySelector('#chores');
const addButton = document.querySelector('#add-task-button');
const message = document.querySelector('#message');
const banner = document.querySelector('#chores-banner');
const bannerInput = document.querySelector('#input');
// const bannerButton = document.querySelector('#banner-button');
// bannerButton.addEventListener('click', addTask);
addButton.addEventListener('click', addTask);

function isScheduleEmpty () {
    if (chores.childElementCount == 1) {
        message.style.display = 'block';
        console.log('Function works');
    }
}

function addTask () {
    message.style.display = 'none';
    if (bannerInput.value == '') {
        alert('Please write something');
    } else {
        chores.innerHTML +=     
        `
        <article class="chores__item">
            <input class="chores__item__checkbox" type="checkbox">
            <span class="chores__item__text">${bannerInput.value}</span>
            <button id="remove" class="chores__item__remove" onclick="this.parentNode.remove(); isScheduleEmpty()">
                <img src="./assets/delete-icon.svg" alt="">
            </button>
        </article>
        `;
        bannerInput.value = '';

    }
    
}

document.addEventListener('keyup', add);

function add(event) {
    if (event.keyCode == 13) {
        addTask();
    }
}