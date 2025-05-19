
function addTask() {
    var taskInput = document.getElementById("taskInput");

   
    console.log(taskInput);

    if (!taskInput) {
        console.error("taskInput element not found!");
        return;
    }

    var task = taskInput.value.trim();

    if (task !== "") {
        var li = document.createElement("li");
        li.textContent = task;

        li.onclick = () => li.remove();

        document.getElementById("tasklist").appendChild(li);
        taskInput.value = ""; 
    }
}
