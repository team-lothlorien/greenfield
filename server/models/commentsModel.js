const db = require('../../db')
const moment = require('moment')


let saveComments = (doctorId, username, comment) => {
  let date = moment().format('MMMM Do, YYYY');
  return db('Comments').insert({
    doctorId: doctorId,
    username: username,
    comment: comment,
    date: date
  })
};

let getComments = (doctorId) => {
  return db('Comments')
  .where('doctorId', doctorId)
  .select()
  .table('Comments')
};

// let editComments = () => {

// };

let deleteComments = (username, doctorId) => {
  return db('Comments')
  .where({
    username: username,
    doctorId: doctorId
  })
  .del()
};


module.exports.saveComments = saveComments;
module.exports.getComments = getComments;
// module.exports.editComments = editComments;
module.exports.deleteComments = deleteComments;