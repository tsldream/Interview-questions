console.log(1);
async function fnOne() {
  console.log(2);
  await fnTwo(); // 右结合先执行右侧的代码, 然后等待
  console.log(3);
}
async function fnTwo() {
  console.log(4);
}
fnOne();
setTimeout(() => {
  console.log(5);
}, 2000);
let p = new Promise((resolve, reject) => { // new Promise()里的函数体会马上执行所有代码
  console.log(6);
  resolve();
  console.log(7);
})
setTimeout(() => {
  console.log(8)
}, 0)
p.then(() => {
  console.log(9);
})
console.log(10);

/* 1
   2
   4
   6
   7
   10
   3
   9
   8
   5 */
console.log(11);
setTimeout(() => {
  console.log(12);
  let p = new Promise((resolve) => {
    resolve(13);
  })
  p.then(res => {
    console.log(res);
  })
  console.log(15);
}, 0)
console.log(14);

/* 1
2 
4 
6 
7 
10
11
14
3 
9 
8 
12
15
13
5 */