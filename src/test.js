const artistsList = require('./server/data/artists.json')

const item = 'David Bow'
let artists = artistsList.artists.filter((m) => m.name.includes(item))

console.log('List', artistsList.artists)
console.log('ARTISTS', artists)

