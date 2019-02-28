const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  email: {
    type: String
  },
 
  subject:{
    type: String
  },
  message: {
    type: String
  }

},{
    collection: 'adunites'
});

module.exports = mongoose.model('AdUnit', AdUnit);
