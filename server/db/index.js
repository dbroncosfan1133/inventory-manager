/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_ATLAS_URL = 'mongodb+srv://sgreen:F7VV7wfzSvRhLcTT@cluster0-5tnbs.mongodb.net/test?retryWrites=true&w=majority'

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_ATLAS_URL) // atlas mongo url
	MONGO_URL = MONGO_ATLAS_URL
}

const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

module.exports = db