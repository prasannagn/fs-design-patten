var serviceFactory = require('../08-observer/ServiceFactory');
var Mediator = require('./mediator');
var Task = require('./../01-constructor/task');

var notificationService = serviceFactory['notification'];
var loggingService = serviceFactory['logging'];
var auditingService = serviceFactory['auditing'] ;

var mediator = new Mediator();
mediator.subscribe('complete', notificationService, notificationService.update);
mediator.subscribe('save', loggingService, loggingService.update);
mediator.subscribe('complete', auditingService, auditingService.update);

var task1 = new Task({
    name: 'create a demo for mediators',
    user: 'Jon'
});
task1.complete = function(){
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};

task1.save = function(){
    mediator.publish('save', this);
    Task.prototype.save.call(this);
};

task1.complete();

task1.save();