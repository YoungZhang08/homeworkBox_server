const getRandom = function(max = 99999, min = 10000) {
  const range = max - min
  const num = min + Math.floor(Math.random() * range)
  return num
}

module.exports = {
  getRandom,
}