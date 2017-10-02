var Task = require('./../01-constructor/task');
var TaskRepository = require('./taskRepository');

var task1 = new Task(TaskRepository.get(1));


task1.complete();
TaskRepository.save(task1);