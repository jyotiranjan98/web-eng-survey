
const data=JSON.parse(localStorage.getItem("data"))

// console.log(data.code)
let x = document.querySelector("#umail")
let y = document.querySelector("#umob")
let z = document.querySelector("#code")

x.innerText=data.email
y.innerText=data.num
z.innerText=data.code
