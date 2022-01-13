const express = require('express')
const router = express.Router()
const multer = require('multer')
const RollData= require('../models/rollDataModel')

// The home route will navigate to the home.ejs
router.get('/home', (req, res) => { 
 
    res.render('home')

})


// The index route will navigate to the index.ejs
router.get('/', (req, res) => { 
  RollData.find({},(err,rollData)=> {
    res.render('index',{rollData})
  })
})


// multer set up

const filesStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
     cb(null, './uploads')
   },
   filename: (req, file, cb) => {
     cb(null, Date.now() + '--' + file.originalname)
   },
 })
 const upload = multer({storage:filesStorageEngine})




// The post route will navigate to the index after posting a new entry from the new ejs
router.post('/', upload.single('myupload'), (req, res, next)=> {

  RollData.create(req.body, (err, createInvEntry) =>{
    
    res.redirect('/index')
  })
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