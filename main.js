window.onload = function() {

    function loadTask () {
        $("#task_description").load("src/" + this.id + "/" + this.id + ".html");
    }
    
    $(".taskCallBtn").click(loadTask);
    
    
//    function includeTasks (arrayOfTasksUrl) {
//        for (let i = 0; i <= arrayOfTasksUrl.length - 1; i++) {
//            var script = document.createElement('script');
//            script.src = arrayOfTasksUrl[i];
//            document.getElementsByTagName('body')[0].appendChild(script);    
//        }   
//    }
//    
//    function createTaskDescription () {
//        
//        document.getElementById("task_description").innerHTML = taskDescription[this.id];
//    }
//    
//    function createTaskBtnHandlers (taskDescriptionButtons) {
//        for (let i = 0; i <= taskDescriptionButtons.length - 1; i++) {
//            taskDescriptionButtons[i].onclick = createTaskDescription;
//        }
//    }
//    
//    includeTasks(arrayOfTasksUrl);
//    createTaskBtnHandlers(taskDescriptionButtons);
    
}