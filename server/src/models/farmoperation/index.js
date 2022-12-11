const mongoose = require('mongoose')
const { Schema } = mongoose

const FarmOperationSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  code: {
    required: true,
    type: String
  }
},
{
  timestamps: true
})

const FarmOperation = mongoose.model('FarmOperation', FarmOperationSchema)
module.exports = FarmOperation
