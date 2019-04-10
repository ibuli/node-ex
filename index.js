import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'

const app = express()
const PORT = 3000

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  /* DeprecationWarning: current URL string parser is deprecated, 
     and will be removed in a future version. To use the new parser, 
     pass option { useNewUrlParser: true } to MongoClient.connect.
  */
  useNewUrlParser: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`)
})

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`)
})