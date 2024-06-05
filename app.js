const express = require('express');
const bodyParser = require('body-parser');


const nodemailer =require('nodemailer');
// Create an Express app
const app = express();
// Set the view engine to ejs
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
    res.render('index');
    console.log('done loading');
});



app.post("/",function(req,res){
    const comm =req.body.message;
    
    var transporter=nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'shriharshranjangupta@gmail.com',
            pass:'emmc axzp ztyk eaik',//password


        }
    })
    var mailOption={
        from: 'shriharshranjangupta@gmail.com',
        to: 'hitrjn@gmail.com',

        subject:'message ARRIVED',
        text:req.body.message,


    };
    transporter.sendMail(mailOption, function(error,info){
        if(error)
            {
                console.log(error);
            }
            else{
                res.redirect('/');
                console.log("email sent"+info.response);
            }
    });
    
    

});



// Listen to port
const PORT = process.env.PORT || 3001;

app.listen(3001, function(){
    console.log('Listening to port ${PORT}');
});




