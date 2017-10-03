var TaskRepositoryCommand = require('./command');


var getTaskCommand = TaskRepositoryCommand('get', 1);
var task = getTaskCommand.execute();
var saveTaskCommand = TaskRepositoryCommand('save', task);
saveTaskCommand.execute();