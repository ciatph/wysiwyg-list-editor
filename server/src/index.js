const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('*', (req, res) => {
  return res.status(200).send('Welcome to the WYSIWYG List API!')
})

app.use((err, req, res, next) => {
  return res.status(500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

