const shakespeareAPI = "http://api.graph.cool/simple/v1/shaekspeare"

let options = () => {
  method: "POST",
  headers: {
    "Content=Type": "application/json"
  },
  body: JSON.stringify({
    // TBD
  })
}

function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
