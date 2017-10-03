
var TaskService = require("./taskService");

var TaskServiceWrapper = function () {

    var completeAndNotify = function (myTask) {
        TaskService.complete(myTask);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    };
    return {
        completeAndNotify: completeAndNotify
    }
};

module.exports = TaskServiceWrapper();