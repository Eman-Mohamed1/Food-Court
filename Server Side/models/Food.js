const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  reciep: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true
  },
  poster:{    
    type: Buffer,
    required: true
  },
  video:{   
    type: URL,
    required: true
  }
}, { timestamps: true });

const FoodModel = mongoose.model('FoodModel', FoodSchema);
module.exports = FoodModel;