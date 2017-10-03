var Task = require('./../01-constructor/task');

var Observers = require('./Observers');



var ObservableTask = function (data) {
    Task.call(this, data);
    this.observers = new Observers();
};

ObservableTask.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function (observer) {
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
};

ObservableTask.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

ObservableTask.prototype.save = function () {
    this.notify(this);
    Task.prototype.save.call(this);
};

module.exports=ObservableTask;