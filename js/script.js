    function addTask() {
        let taskInput = document.getElementById("taskInput");
        let taskList = document.getElementById("taskList");
  
        if (taskInput.value !== "") {
          let taskItem = document.createElement("li");
          taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
          taskItem.innerHTML = taskInput.value;
          
          let deleteBtn = document.createElement("button");
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
        let addTaskBtn = document.getElementById("addTaskBtn");
      addTaskBtn.addEventListener("click", addTask);