const inputTask = document.getElementById("inputTask");
const listContainer = document.getElementById("listContainer");
const emptyField = document.getElementById("emptyField");
const tMessage = document.getElementById('message');
const toastLiveExample = document.getElementById('liveToast');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

addTask.addEventListener('click', () => {
    if (inputTask.value === '') {
        emptyField.style.display = 'block';
        inputTask.focus();
    }
    else {
        emptyField.style.display = 'none';
        let li = document.createElement("li");
        let span = document.createElement("span");
        li.innerHTML = `<span class="taskList w-100">${inputTask.value}</span>`;
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        listContainer.appendChild(li);
        span.innerHTML = '<i class="fa-solid fa-trash deleteTask"></i>'
        li.appendChild(span);
        span.classList.add("btn", "btn-sm", "btn-danger");
        inputTask.value = '';
        saveData();
        tMessage.innerText = 'Task Added';
        toastBootstrap.show();
    }
});

listContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("deleteTask")) {
        e.target.parentElement.parentElement.remove();
        saveData();
        tMessage.innerText = 'Task Removed';
        toastBootstrap.show();
    }
    else if (e.target.classList.contains("taskList")) {
        inputTask.value = e.target.innerText;
        e.target.parentElement.remove();
        inputTask.focus();
    }
});

function saveData() {
    localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));
}


function showData() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        listContainer.innerHTML = data;
    }
    else {
        tMessage.innerText = 'No data Available! Add your tasks.';
        toastBootstrap.show();
        listContainer.innerHTML = "";
    }
}
showData();