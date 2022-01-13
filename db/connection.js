const mongoose = require('mongoose')
const mongoURI = process.env.mongoURI


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