console.log(1)

setTimeout(function () {
  console.log(2)
}, 0)

const p = new Promise((resolve, reject) => {
  console.log(3)
  resolve(1000) // 标记为成功
  console.log(4)
})

p.then(data => {
  console.log(data)
})

console.log(5)

// 1 3 4 5 1000 2