const express = require('express')
const router = express.Router()
const multer = require('multer')
const bodyParser = require("body-parser")
const storage = multer.memoryStorage()
const RollData= require('../models/rollDataModel')



// The home route will navigate to the home.ejs
router.get('/home', (req, res) => { 
  res.render('home')
})


// The home route will navigate to the home.ejs
router.get('/report', (req, res) => { 
  RollData.find({},(err,rollData)=> {
    res.render('report',{rollData})
  })
})

// The index route will navigate to the index.ejs
router.get('/', (req, res) => { 
  RollData.find({},(err,rollData)=> {
    res.render('index',{rollData})
  })
})


// multer set up-------
// Filter by image size/file type
const fileFilter = (req, file, cb) => {

  //if the filetype is not right
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'|| file.mimetype === 'application/pdf') {
      cb(null, true)
  } else {
      cb(null, false)
  }
}
const upload = multer({
  storage: storage,

     
  fileFilter: fileFilter
})

// The post route will navigate to the index after posting a new entry from the new ejs
router.post('/', upload.single('myupload'), async (req, res, next)=> {

  const product = ({
      name: req.body.name,
      statementDate: req.body.statementDate,
      beginningBalance: req.body.beginningBalance,
      purchases: req.body.purchases,
      income: req.body.income,
      withdrawals: req.body.withdrawals,
      realized: req.body.realized,
      unrealized: req.body.unrealized,
      fees: req.body.fees,
      endingBalance: req.body.endingBalance,
      myupload: {
        data: req.file.buffer,
        ContentType: req.file.mimetype
      }
  })



  const createNewProduct = await RollData.create(product)
    res.redirect('/index')

})

// This route will delete an entry and navigate to the index view
router.delete('/:id', (req, res) => { 
  RollData.findByIdAndRemove(req.params.id, (err,deleteRollData) => {
    res.redirect('/index')
  })
})  

// The new route will navigate to the new  ejs
router.get('/new', (req, res) => { 
  res.render('new.ejs')
})

// The roll route will navigate to the new roll ejs
router.get('/roll', (req, res) => { 
  RollData.find({},(err,rollData)=> {
    
    res.render('roll.ejs', {rollData})
  
    })
})



// The show route will navigate to show.ejs
router.get('/:id',(req,res) =>{
  RollData.findById(req.params.id, (err,rollData) => {
    res.render('show',{rollData})
  })
})

// The edit route will navigate to edit.ejs
router.get('/:id/edit',(req,res) =>{
  RollData.findById(req.params.id, (err,rollData) => {
      res.render('edit',{rollData})
})
})

// The put route will update the database based on user entry in the edit view then navigate to show route
router.put('/:id',(req,res) =>{
  RollData.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, rollData)=>
  {
    res.render('show', {rollData})
  })
})




module.exports = router