if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define([ 'jquery' ], function ($) {
    return {
        async:function (value) {
            var dfd = $.Deferred()
            setTimeout(function() {
                dfd.resolve(value)
            })
            return dfd.promise()
        },

        manipulateRemoteData:function (url) {
            var dfd = $.Deferred()
            $.getJSON(url, function(data) {
                var res = []
                _.map(data.people, function(man) {
                    res.push(man.name)
                })
                dfd.resolve(res.sort())
            })
            return dfd.promise()
        }
    };
});
