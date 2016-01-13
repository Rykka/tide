// start a monitor server for monitoring

var monitor_list = {}
var monitor_dict = {
}

var assign = require('object-assign')

var _SET_DICT = {
    set(key, value){
        this[key] = value;
    },
    remove(key){
        delete this[key];
    }
}

var monitor = {
    log(msg) {
        // this.list('log').push(msg)
        console.log(msg)
    },
    dict(name){
        if (monitor_dict.hasOwnProperty(name)) {
            return monitor_dict[name]
        } else {
            return monitor_dict[name] = assign({}, _SET_DICT)
        }
    },
    list(name){
        if (monitor_list.hasOwnProperty(name)) {
            return monitor_list[name]
        } else {
            return monitor_list[name] = []
        }
    },
    render(){
        for (var k in monitor_list) {
            monitor_list[k].sort().reverse()
            console.log(k)
            var i = 1
            for (var v in monitor_list[k]){
                var elem = monitor_list[k].pop()
                console.log(i++ + "\t| " + elem)
            }
        }
        for (var k in monitor_dict) {
            console.log(k)
            for (var v in monitor_dict[k]){
                if (v=='set' || v=='remove') continue
                var elem = monitor_dict[k][v]
                console.log(v + "\t| " + elem)
            }
        }
    }
}

// log server status of connection
setInterval(function() {
    monitor.render();
}, 1000);

module.exports = monitor
