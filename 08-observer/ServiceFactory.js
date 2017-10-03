var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};
var loggingService = function () {
    var message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};
var auditingService = function () {
    var message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};


var ServiceFactory = function () {
    var self = this;
    var services = [
        {name:'notification', source:notificationService},
        {name:'logging', source:loggingService},
        {name:'auditing', source:auditingService}
    ];
    services.forEach(function(service){
        self[service.name] = new service.source();
    });
};

module.exports = new ServiceFactory();