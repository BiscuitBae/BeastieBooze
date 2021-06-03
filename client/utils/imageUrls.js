const testUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/Edmund_J_Sullivan_Illustrations_to_The_Rubaiyat_of_Omar_Khayyam_First_Version_Quatrain-056.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d6/Edmund_J_Sullivan_Illustrations_to_The_Rubaiyat_of_Omar_Khayyam_First_Version_Quatrain-035.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/f/f7/Edmund_J_Sullivan_Illustrations_to_The_Rubaiyat_of_Omar_Khayyam_First_Version_Quatrain-062.jpg'
]

const imageUrlParser = () => {
  const index = Math.floor(Math.random() * testUrls.length)
  return testUrls[index]
}


module.exports = {
  testUrls, 
  imageUrlParser
}