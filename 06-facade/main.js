var taskServiceWrapper = require("./taskServiceWrapper");
var Task = require('./../01-constructor/task');

var task = new Task({name:"test task",user:"test user"})

taskServiceWrapper.completeAndNotify(task);