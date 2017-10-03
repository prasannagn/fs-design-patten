var ObservableTask = require('./ObservableTask');
var serviceFactory = require('./ServiceFactory');

var notificationService = serviceFactory['notification'];
var loggingService = serviceFactory['logging'];
var auditingService = serviceFactory['auditing'] ;




var task1 = new ObservableTask({
    name: 'create a demo for constructors',
    user: 'Jon'
});

task1.addObserver(notificationService.update);
task1.addObserver(loggingService.update);
task1.addObserver(auditingService.update);

task1.save();

task1.removeObserver(auditingService);
task1.save();