// Config const and require---------------

require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const invController = require('./controller/invController')



// Config set and use---------------

app.set("port", process.env.PORT || 8000)
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(expressEjsLayout)
app.set('view engine', 'ejs')


// redirect user to home page ---------------
app.get('/', (req, res) => {
    res.redirect('/index/home')
  })

// Controllers ---------------
// the "home" page in this section is the index
app.use('/index',invController)


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
