// 
function addTask() {
    var taskInput = document.getElementById("taskInput");

    // Debugging log
    console.log(taskInput);

    // Ensure taskInput is not null
    if (!taskInput) {
        console.error("taskInput element not found!");
        return;
    }

    var task = taskInput.value.trim();

    if (task !== "") {
        var li = document.createElement("li");
        li.textContent = task;

        // Remove task on click
        li.onclick = () => li.remove();

        document.getElementById("tasklist").appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
}
