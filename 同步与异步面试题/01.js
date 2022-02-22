console.log(1)

setTimeout(function() {
  console.log(2)
}, 0)

const p = new Promise((resolve, reject) => {
  resolve(1000)
})
p.then(data => {
  console.log(data)
})

console.log(3)

// 输出顺序
// 1 3 1000 2