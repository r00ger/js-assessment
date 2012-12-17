if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    return {
        indexOf:function (arr, item) {
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                if (arr[i] === item) {
                    return i
                }
            }
            return -1
        },

        sum:function (arr) {
            var sum = 0
            for (var i  = 0, arrLength = arr.length; i < arrLength; i++) {
                sum += arr[i]
            }
            return sum
        },

        remove:function (arr, item) {
            var res = []
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                if (arr[i] !== item) {
                    res.push(arr[i])
                }
            }
            return res
        },

        removeWithoutCopy:function (arr, item) {
            var i = 0
            while (i < arr.length) {
                if (arr[i] === item) {
                    arr.splice(i, 1)
                } else {
                    i++
                }
            }
            return arr
        },

        append:function (arr, item) {
            arr.push(item)
            return arr
        },

        truncate:function (arr) {
            arr.pop()
            return arr
        },

        concat:function (arr1, arr2) {
            return arr1.concat(arr2)
        },

        insert:function (arr, item, index) {
            var tail = arr.splice(index)
            arr[index] = item
            return arr.concat(tail)
        },

        count:function (arr, item) {
            var count = 0
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                if (arr[i] === item) {
                    count++
                }
            }
            return count
        },

        duplicates:function (arr) {
            var aDuplicates = [],
                oDuplicates = {}
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                var item = arr[i]
                if (oDuplicates[item]) {
                    aDuplicates.push(item)
                } else {
                    oDuplicates[item] = true
                }
            }
            return aDuplicates
        },

        square:function (arr) {
            var res = []
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                res[i] = arr[i] * arr[i]
            }
            return res
        },

        findAllOccurrences:function (arr, target) {
            var occurrences = []
            for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
                if (arr[i] === target) {
                    occurrences.push(i)
                }
            }
            return occurrences
        }
    };
});
