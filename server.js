require('dotenv').config()
const express = require('express')
const app = express()



app.set("port", process.env.PORT || 8000)

const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const invController = require('./controller/invController')






// Config ---------------
// because we specific the public folder as the holder of all our css and other public folders we don't have to do a relative path in the ejs view wee can just put skelton.css  <link rel="./css/stylesheet" href="./css/skeleton.css">


app.use(express.static('public'))
app.use(methodOverride('_method'));

const routeHit = (req,res,next) =>{
    next()
}
app.use(routeHit)



app.use(express.urlencoded({extended:false}));

app.use(expressEjsLayout)
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.redirect('/index/home')
  })

// Controllers ---------------
// the use in this section is the home url
app.use('/index',invController)


app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
