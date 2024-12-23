function getTask() {
    document.getElementById("getTask")
    const inputValue = document.getElementById("utilizeInput").value;
    if (inputValue != "") {
        const button = document.createElement("li");
        button.innerText = inputValue;
        button.className = "list-unstyled";
        const button2 = document.createElement("button");
        button2.innerText = "delete";
        button2.className = "btn btn-primary ms-1 align-content-end";
        const outputValue = document.getElementById('storeTasks');
        const combinedElements = document.createElement("div");
        combinedElements.className = "border";
        combinedElements.appendChild(button);
        combinedElements.appendChild(button2);
        outputValue.appendChild(combinedElements);
        button2.onclick = function() {
            combinedElements.remove();
        }
    }    
    else {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        if (inputValue != "") {tasks.push({ task: inputValue });
        }
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    }   
    }
getTask();