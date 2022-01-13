const mongoose = require('./connection')
const rollDataModel = require('../models/rollDataModel')
const dataSeeds = require('./dataSeed')

rollDataModel.deleteMany({})
    .then(()=>{
        return rollDataModel.insertMany(dataSeeds)
    })
    .then(data => console.log(data))
    .catch(err=>console.log(err))
    .finally(()=>{
      process.exit()
})

