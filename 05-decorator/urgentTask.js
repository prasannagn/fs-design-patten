//Inheritance
var Task = require('./../01-constructor/task');

//Constructor function
var UrgentTask = function (name, priority) {
    Task.call(this, {name:name});
    this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);

//New Method
UrgentTask.prototype.notify = function () {
    console.log('notifying important people');
};

//Overriding
UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this)
};

module.exports = UrgentTask;