// 在函数中直接使用
/* function get(content) {
  console.log(content);
}
get('你好')   // 相当于下面这行代码
get.call(window, '你好')


// 函数作为对象的方法被调用（谁调用我，我就指向谁）
var person = {
  name: 'zhangs',
  run: function (time) {
    console.log(`${this.name} 在跑步 最多${time}`);
  }
}
person.run(30)    // 相当于下面这行代码
person.run.call(person, 30) */

var name = 222
var a = {
  name: 111,
  say: function () {
    console.log(this.name);
  }
}

var fun = a.say
fun()                 // 222  fun.call(window)
a.say()               // 111   a.say.call(a)

var b = {
  name: 333,
  say: function (fn) {
    fn()      // 222  fn.call(window)=function() {console.log(this.name)}
  }
}
b.say(a.say)  //
b.say = a.say
/* var b = {
  name: 333,
  say: function() {
    console.log(this.name);
  }
} */
b.say()    // b.say.call(b)


/* 箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定。
箭头函数中，this指向的固定化， 并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有
自己的this,导致内部的this就是外层代码块的this。 正是因为它没有this,所以也就不能用作构造函数。
箭头函数中的this是在定义函数的时候绑定 */

var x = 11
var obj = {
  x: 22,
  say: () => {
    console.log(this.x);
  }
}
obj.say()   // 11

/* 所谓的定义时候绑定，就是this是继承自父执行上下文中的this,比如这里的箭头函数中的this.x，箭头函数本
身与say平级以key:value的形式，也就是箭头函数本身所在的对象为obj,而obj的父执行上下文就是
window,因此这里的this.x实际.上表示的是window.x,因此输出的是11。 */

var obj = {
  birth: 1990,
  getAge: function () {
    var b = this.birth // 1990
    var fn = () => new Date().getFullYear() - this.birth  // this指向obj对象
    return fn()
  }
}
obj.getAge()
/* 例子中箭头函数本身是在getAge方法中定义的，因此，getAge方法的父执行上下文是obj，因此这里的this指
向则为obj对象 */