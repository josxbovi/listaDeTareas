    function addTask() {
        var taskInput = document.getElementById("taskInput");
        var taskList = document.getElementById("taskList");
  
        if (taskInput.value !== "") {
          var taskItem = document.createElement("li");
          taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
          taskItem.innerHTML = taskInput.value;
          
          var deleteBtn = document.createElement("button");
          deleteBtn.className = "btn btn-danger btn-sm";
          deleteBtn.innerHTML = "Eliminar";
          deleteBtn.addEventListener("click", function() {
            taskItem.remove();
          });
          
          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);
          
          taskInput.value = "";
        }
      }
        var addTaskBtn = document.getElementById("addTaskBtn");
      addTaskBtn.addEventListener("click", addTask);