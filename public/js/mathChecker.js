//set variables used to zero by default used by default in the new.ejs
let bBalance= 0 
let purchases= 0 
let income= 0
let withdrawals= 0
let realized= 0 
let unrealized= 0 
let fees= 0 
let endingBalance= 0 
let mathCheck = 0

//set "check" variables to the field, if field is blank the value = NAN
// used by default in the edit.ejs
let checkBBalance = parseFloat($("#beginningBalance").val())
let checkPurchases = parseFloat($("#purchases").val())
let checkIncome = parseFloat($("#income").val())
let checkWithdrawals = parseFloat($("#withdrawals").val())
let checkRealized = parseFloat($("#realized").val())
let checkUnrealized = parseFloat($("#unrealized").val())
let checkFees = parseFloat($("#fees").val())
let checkEndingBalance = parseFloat($("#endingBalance").val())
let checkNameValid = $('#name').val()
let checkDateValid = $('#statementDate').val()




// if the "check" variable is anything other than Nan reassign variable used in equations
if(checkNameValid){
  nameValid = checkNameValid
}

if(checkDateValid){
  dateValid = checkDateValid
}

if(checkBBalance){
  bBalance = checkBBalance
}


if(checkPurchases){
 purchase = checkPurchases
}

if(checkIncome){
  income = checkIncome
}

if(checkWithdrawals){
   withdrawals = checkWithdrawals
}

if(checkRealized){
   realized = checkRealized
}

if(checkUnrealized){
   unrealized = checkUnrealized
}

if(checkFees){
 fees = checkFees
}

if(checkEndingBalance){
 endingBalance = checkEndingBalance
}


// set default state of button to disabled forcing user to get to zero variance
$('#submitEntry').attr("disabled",true)
$('#mathCalc').append('Auto calculated')


// set backend to listen to form fields data entry and update after data entry
$('#beginningBalance').change( ()=>{
 bBalance =  parseFloat($("#beginningBalance").val())
})

$('#purchases').change( ()=>{
 purchases  =  parseFloat($("#purchases").val())
})

$('#income').change( ()=>{
  income  =  parseFloat($("#income").val())
})

$('#withdrawals').change( ()=>{
 withdrawals  =  parseFloat($("#withdrawals").val())
})

$('#realized').change( ()=>{
  realized  =  parseFloat($("#realized").val())
})


$('#unrealized').change( ()=>{
  unrealized  =  parseFloat($("#unrealized").val())
})

$('#fees').change( ()=>{
  fees  =  parseFloat($("#fees").val())
})

$('#endingBalance').change( ()=>{
 endingBalance  =  parseFloat($("#endingBalance").val())
})


$('td').change(() => {

  let nameValid = $('#name').val()
  let dateValid = $('#statementDate').val()

  // checks to see if the data entry would roll or not (does everything add up)
  mathCheck  = ((purchases + income + withdrawals + realized +unrealized +fees)-endingBalance +bBalance)
   

  $('#mathCalc').empty()

  // parsefloat the math because Java can't do math
 $('#mathCalc').append(Number.parseFloat(mathCheck).toFixed(2))
  
  // set  state of submit button to enable if variance == 0 otherwise default state of disable
  // also check for valid date and name
  let zeroCheck = mathCheck

  if (nameValid || dateValid){
    $('#submitEntry').attr("disabled",true)
  }

  if (zeroCheck == "0" ||zeroCheck == "0.0" || zeroCheck == "0.00"){
    if (nameValid && dateValid){
    $('#submitEntry').attr("disabled",false)
  }}
  
  else{
    $('#submitEntry').attr("disabled",true)
  }

})

