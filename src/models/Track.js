const mongoose = require ('mongoose');

const pointSchema = new mongoose.Schema({
  
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjrectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  locations: [pointSchema]
});