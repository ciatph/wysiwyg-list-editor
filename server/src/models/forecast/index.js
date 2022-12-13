const mongoose = require('mongoose')
const { Schema } = mongoose

const ForecastSchema = new Schema({
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

const Forecast = mongoose.model('Forecast', ForecastSchema)
module.exports = Forecast
