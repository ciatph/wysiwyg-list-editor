const mongoose = require('mongoose')
const { Schema } = mongoose

const SeasonalObjectSchema = new Schema({
  uid: {
    required: true,
    type: String
  },
  table_id: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    ref: 'SeasonalTable'
  },
  crop_stage: {
    required: true,
    type: String
  },
  farm_operation: {
    required: true,
    type: String
  },
  forecast: {
    required: true,
    type: String
  },
  impacts: {
    type: String
  },
  impacts_tg: {
    type: String
  },
  practice: {
    type: String
  },
  practice_tg: {
    type: String
  },
  updated_by: {
    required: true,
    type: String
  }
},
{
  timestamps: true
})

const SeasonalObject = mongoose.model('SeasonalObject', SeasonalObjectSchema)
module.exports = SeasonalObject
