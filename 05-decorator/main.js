var Task = require('./../01-constructor/task');
var UrgentTask = require('./urgentTask');
// task
var myTask = new Task({name:'Legacy Task'});
myTask.complete();
myTask.save();


//Urgent task
var ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);