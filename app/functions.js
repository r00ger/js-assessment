if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        argsAsArray:function (fn, arr) {
            return fn.apply(null, arr)
        },

        speak:function (fn, obj) {
            return fn.call(obj)
        },

        functionFunction:function (str) {
            return function(str1) {
                return str + ', ' + str1
            }
        },

        makeClosures:function (arr, fn) {
            var res = []
            for (var i = 0, length = arr.length; i < length; i++) {
                res.push(function(val){
                    return function(){
                        return fn(val)
                    }
                }(arr[i]))
            }
            return res
        },

        partial:function (fn, str1, str2) {
            return function(arg3) {
                return fn(str1, str2, arg3)
            }
        },

        useArguments:function () {
            var sum = 0
            for (var i = 0, length = arguments.length; i < length; i++) {
                sum += arguments[i]
            }
            return sum
        },

        callIt:function (fn) {
            return fn.apply(null, Array.prototype.slice.call(arguments, 1))
        },

        curryIt:function (fn) {
            var availableArgs = Array.prototype.slice.call(arguments, 1)
            return function(){
                var extendedArgs = availableArgs.concat(Array.prototype.slice.call(arguments))
                return fn.apply(null, extendedArgs)
            }
        }
    };
});
