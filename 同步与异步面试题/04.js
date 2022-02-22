new Promise((resolve, reject) => {
  resolve(1)

  new Promise((resolve, reject) => {
    resolve(2)
  }).then(data => {
    console.log(data)
  })

}).then(data => {
  console.log(data)
})

console.log(3)

// 3 2 1