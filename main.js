window.onload = function() {

    function loadTask () {
        $("#task_description").load("src/" + this.id + "/" + this.id + ".html");
    }
    
    $(".taskCallBtn").click(loadTask);    
}