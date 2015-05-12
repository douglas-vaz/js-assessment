if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(x,y){return x+y;});
    },

    remove : function(arr, item) {
      return arr.reduce(function(acc, e){
        if (e !== item) {
          return acc.concat(e);
        } else return acc;
      }, []);
    },

    removeWithoutCopy : function(arr, item) {
      var t = arr.indexOf(item);
      while (t !== -1){
        arr.splice(t,1);
        t = arr.indexOf(item);
      }
      return arr;
    },

    append : function(arr, item) {
      return arr.concat(item);
    },

    truncate : function(arr) {
      return arr.slice(0, arr.length-1);
    },

    prepend : function(arr, item) {
      return [item].concat(arr);
    },

    curtail : function(arr) {
      return arr.slice(1, arr.length);
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      return arr.slice(0,index).concat(item).concat(arr.slice(index));
    },

    count : function(arr, item) {
      return arr.reduce(function(acc, e){
        if (e === item) return acc+1
        else return acc;
      }, 0);
    },

    duplicates : function(arr) {
      return arr.reduce(function(acc,e){
        var seen = acc[0];
        var result = acc[1];

        if(seen.indexOf(e) !== -1 && result.indexOf(e) === -1) result = result.concat(e);
        seen = seen.concat(e);

        return [seen, result];

      }, [[],[]])[1];
    },

    square : function(arr) {
      return arr.map(function(e){return e*e;});
    },

    findAllOccurrences : function(arr, target) {
      return arr.reduce(function(acc, e, i){
        if(e === target) {
          return acc.concat(i);
        } else return acc;
      }, []);
    }
  };
});
