const imgUrls = [
  'images/1.png',
  'images/4.png',
  'images/5.png',
  'images/7.png',
  'images/11.png',
  'images/12.png',
  'images/14.png',
  'images/17.png',
  'images/20.png',
  'images/22.png'
]

const imageUrlParser = () => {
  const index = Math.floor(Math.random() * imgUrls.length)
  return imgUrls[index]
}


module.exports = {
  imgUrls,
  imageUrlParser
}