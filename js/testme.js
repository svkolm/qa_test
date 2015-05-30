var JsUsefulClass = (function(_) {'use strict';
  function JsUsefulClass(){
    this.instances = {};
  }

  JsUsefulClass.prototype.add_number = function(param, level){
    if (!this.instances[level]){
      this.instances[level] = makeLevel(level);
    }
    return this.instances[level].append(param);

    function makeLevel(level) {
      var params = [];

      return {
        append: function(p){
          params.push(p);
          return this;
        },
        el_numeros: function(func){
          var i, ret = [];
          for (i = 0; i < params.length; i++){
            ret.push(func?func(i, level):i % level);
          }
          return ret;
        }
      };
    }
  };

  JsUsefulClass.prototype.getAllLevels = function(func){
    return _.reduce(this.instances, function(memo, inst, key){
      memo[key] = inst.el_numeros(func);
      return memo;
    }, {});
  };
  return JsUsefulClass;
}(_));

Notifier = window.Notifier || {
  sendNotify: function(text, param){
    console.log(text, param);
  }
};
