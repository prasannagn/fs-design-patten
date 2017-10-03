var repoFactory = require('../03-factory/repositoryFactory');

var TaskRepositoryCommand = function (command) {
    var args = Array.prototype.slice.call(arguments, 1);
    var taskRepository = repoFactory['task'];

    return {
        execute: function () {
            if(taskRepository[command]){
                return taskRepository[command].apply(taskRepository, args)
            }

            return false;
        }
    }
};

module.exports = TaskRepositoryCommand;

