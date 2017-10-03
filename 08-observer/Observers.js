function Observers() {
    this.observerList = [];
}

Observers.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

Observers.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

Observers.prototype.count = function () {
    return this.observerList.length;
};

Observers.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};

Observers.prototype.indexOf = function (obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

module.exports=Observers;