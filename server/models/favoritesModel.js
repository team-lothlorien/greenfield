const db = require('../../db')

//returns a promise
let saveFavorites = (username, doctorNPI, doctorData) => {
  return db('Favorites')
  .where('username', username)
  .andWhere('doctorNPI', doctorNPI)
  .then(res => {
    if(!res.length) {
      db('Favorites')
      .insert({
        username: username,
        doctorNPI: doctorNPI,
        doctorData: JSON.stringify(doctorData)
      })
      .catch(err => console.log(err))
    }
  })
};

let getFavorites = (username) => {
  return db('Favorites')
  .where('username', username)
  .select()
  .table('Favorites')
};

let deleteFavorites = (username, doctorNPI) => {
  return db('Favorites')
  .where({
    username: username,
    doctorNPI: doctorNPI
  })
  .del()
};


module.exports.saveFavorites = saveFavorites;
module.exports.getFavorites = getFavorites;
module.exports.deleteFavorites = deleteFavorites;