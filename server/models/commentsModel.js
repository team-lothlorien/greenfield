const db = require('../../db')
const moment = require('moment')


let saveComments = (doctorId, username, comment) => {
  return db('Comments').insert({
    doctorId: doctorId,
    username: username,
    comment: comment,
    date: moment().format('MMMM Do, YYYY')
  })
};

let getComments = () => {
  return db.select()
  .table('Comments')
};

let editComments = () => {

};

let deleteComments = (username, doctorId) => {
  db('Comments')
  .where({
    username: username,
    doctorId: doctorId
  })
  .del()
};


module.exports.saveComments = saveComments;
module.exports.getComments = getComments;
module.exports.editComments = editComments;
module.exports.deleteComments = deleteComments;