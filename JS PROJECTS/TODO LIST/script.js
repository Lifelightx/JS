

let taskinput = document.getElementById("taskInput");
let tasklist = document.getElementById("taskList");

function addTask(){
    const taskText = taskinput.value.trim();

    if(taskText !== ''){
        const li = document.createElement('li');
        li.textContent = taskText;

        const delteButton = document.createElement('span');
        delteButton.textContent = "❌";
        delteButton.classList.add('delete');
        delteButton.onclick = function(){
            tasklist.removeChild(li);
        }
        li.appendChild(delteButton);
        tasklist.appendChild(li);

        taskinput.value = '';
    }
}