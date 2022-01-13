const mongoose = require('mongoose')


const mongoURI =
  //check if the node environment is production
  process.env.NODE_ENV === "production"
    ? //if so, use DB_URL as the database location
      process.env.DB_URL
    : //if not, use the fruits-app db on the MongoDB's local server
      "mongodb://localhost/invest-roll";


mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.error('Connection failed!', error))

// Export mongoose so we can use it elsewhere
module.exports = mongoose