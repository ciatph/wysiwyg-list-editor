const mongoose = require('mongoose')
const { Schema } = mongoose

const CropStageSchema = new Schema({
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

const CropStage = mongoose.model('CropStage', CropStageSchema)
module.exports = CropStage
