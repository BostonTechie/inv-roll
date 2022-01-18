### Your project idea 
>Brief 2-3 sentence description of your app

I have selected building an investment roll-forward to assist the speed of day to day accounting needs of a firm.  You can log and roll forward investment information, making reconciliation easier.

### TECHNOLOGY Used

 HTML
* CSS
* JavaScript
* JQuery /  JQuery Data Tables
* MongoDB
* NodeJS/Express
* Figma
* Visual studio code editor


### MVP


* Be to create read update and destroy a monthly data entry information store it in a database
* Have the functionality to search for specific information by name
*  Have that database render into a rollfoward

### Stretch Goals
   * Be able to create, read, update, and destroy investment information and store it in a database
   * Create views for a consolidated portfolio (everything added together)
   * user can sign in
   * user multer to upload documents
   *  export the data to excel
   *  add another schema for more functionality

### Front-end
> Are you planning to use Handlebars, EJS, or DOM-manipulation for your HTML?
> It is OK to change this as you go

I plan to use EJS

### List of Mongoose models and their properties

const **rollDataSchema** = new mongoose.Schema({
    name: {type: String, required: true},
    date: {postingDate: Date, statementDate: Date},
    beginningBalance: Number,
    purchases: Number,
    income: Number,
    withdrawals:Number,
    realized: Number,
    unrealized: Number,
    fees: Number,
    endingBalance: Number
})


### List of Routes


Route | Method | Description

![image](https://media.git.generalassemb.ly/user/38962/files/98083280-636a-11ec-88f2-edea84b249ce)




### User stories
    * As a user, I want an easy, user-friendly way to create a new investment
    * As a user, I want an easy, user-friendly way to create data and log that monthly data into a roll forward format
    * As a user, I expect the computer to check my math to ensure proper data entry
    

### Wireframes
![image](https://media.git.generalassemb.ly/user/38962/files/82890d80-6356-11ec-9601-4c84025fc63d)
![image](https://media.git.generalassemb.ly/user/38962/files/8b79df00-6356-11ec-86ca-87de19f52302)
![image](https://media.git.generalassemb.ly/user/38962/files/97fe3780-6356-11ec-97e8-07eec3e93f2b)
![image](https://media.git.generalassemb.ly/user/38962/files/a0ef0900-6356-11ec-9815-35953ee40cef)
![image](https://media.git.generalassemb.ly/user/38962/files/a77d8080-6356-11ec-9554-a05eed984822)




