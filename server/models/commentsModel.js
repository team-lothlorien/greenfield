const db = require('../../db')
const moment = require('moment')
//require the database

//returns a promise
let saveComments = (doctorId, username, comment) => {
  db.insert({
    doctorId: doctorId,
    username: username,
    comment: comment,
    date: new Date()
  })
};

let getComments = () => {

};

let editComments = () => {

};

let deleteComments = () => {

};


module.exports.saveComments = saveComments;
module.exports.getComments = getComments;
module.exports.editComments = editComments;
module.exports.deleteComments = deleteComments;