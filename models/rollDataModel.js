const mongoose = require('../db/connection')

const rollDataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    statementDate: String,
    beginningBalance: Number,
    purchases: Number,
    income: Number,
    withdrawals:Number,
    realized: Number,
    unrealized: Number,
    fees: Number,
    endingBalance: Number,
    myupload: {
        Data: Buffer,
        ContentType: String,
    }
})

const rollDataModel = mongoose.model('rollforward',  rollDataSchema)

module.exports = rollDataModel