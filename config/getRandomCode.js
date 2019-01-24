const getRandomCode = function(max, min) {
  const range = max - min
  const num = min + Math.floor(Math.random() * range)
  return num
}

module.exports = {
  getRandomCode,
}