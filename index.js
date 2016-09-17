var event = {

    // 绑定事件
    on: function(eventName, callback) {
        if (!this._event) this._event = {};
        if (!this._event[eventName]) this._event[eventName] = [];

        this._event[eventName].push(callback);
    },

    // 取消绑定
    off: function(eventName, callback) {
        if (!this._event) this._event = {};
        if (!this._event[eventName]) this._event[eventName] = [];

        var index = this._event[eventName].indexOf(callback);
        if (index !== -1) {
            this._event[eventName] = this._event[eventName].splice(index, 1)
        }
    },

    // 触发事件
    trigger: function(eventName) {
        if (!this._event) this._event = {};
        if (!this._event[eventName]) this._event[eventName] = [];

        this._event[eventName].forEach(function(callback) {
            callback();
        })
    }

}
