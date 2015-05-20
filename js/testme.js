function JsUsefulClass(level){
    params = [];
    return {
        append: function(p){
            params.push(p);
            return this;
        },
        el_numeros: function(func){
            var ret = [];
            for (i in params){
                ret.push(func?func(i, level):i % level);
            }
            return ret;
        }
    }
}
JsUsefulClass.prototype.instances = {};
JsUsefulClass.prototype.add_number = function(param, level){
    if (!JsUsefulClass.instances[level]){
        JsUsefulClass.instances[level] = JsUsefulClass(level);
    }
    return JsUsefulClass.instances[level].append(param);
}
JsUsefulClass.prototype.getAllLevels = function(func){
    return _.reduce(this.instances, function(memo, inst){
        memo[key] = inst.el_numeros(func);
        return memo;
    }, {});
}

Notifier = window.Notifier || {
    sendNotify: function(text, param){
        console.log(text, param);
    }
}
