var Event = (function () {
  var list = {},
    listen,
    trigger,
    remove;
  listen = function (key, fn) {
    if (!list[key]) {
      list[key] = []
    }
    list[key].push(fn)
  }
  trigger = function () {
    // 取出这个key
    // shift()  删除数组的第一个元素，并返回该元素。
    var key = Array.prototype.shift.call(arguments)
    // console.log(key);
    var fns = list[key]
    // console.log(fns);
    if (!fns || fns.length == 0) {
      return false
    }
    // 遍历这个数组 然后执行里面的函数
    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  }
  remove = function (key, fn) {
    var fns = list[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var i = fns.length - 1; i >= 0; i--) {
        var _fn = fns[i]
        if (_fn === fn) {
          fns.splice(i, 1)
        }
      }
    }
  }
  return {
    listen: listen,
    trigger: trigger,
    remove: remove
  }
})()