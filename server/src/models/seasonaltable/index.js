const mongoose = require('mongoose')
const { Schema } = mongoose

const SeasonalTableSchema = new Schema({
  uid: {
    required: true,
    type: String
  },
  name: {
    required: true,
    type: String
  },
  description: {
    type: String
  },
  records: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SeasonalObject'
  }],
  updated_by: {
    required: true,
    type: String
  }
},
{
  timestamps: true
})

const SeasonalTable = mongoose.model('SeasonalTable', SeasonalTableSchema)
module.exports = SeasonalTable
