const express = require('express');
var app = express();
const router = express.Router();
const mongoose=require('mongoose');
const nodemailer=require('nodemailer');




var userschema = mongoose.model('users', {name: String, username: String,mobile:Number,email:String,password:String});

router.post('/register', function(req, res){

     var newuser = new userschema({name:req.body.name,username:req.body.username,mobile:req.body.mobile,email:req.body.email ,password:req.body.password});
    console.log(newuser)
    const{email}=req.body.email;
    
     newuser.save(function(err){
        if(err){
            res.send('Something went wrong');
        }else{
            res.send('User registration successfull');
        }
     })
     try{
        const transporter=nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:"darshanvirtual511@gmail.com",
                pass:"whhluzuhrrrkeekr"
            }
        })
        const mailoption = {
            from: "darshanvirtual511@gmail.com",
            to: newuser.email,
            subject: "Registered successfully",
            text: "Welcome to virtual darshan application to visit culture rich Indian Temples",
            html:"<<a href='http://localhost:3000/login'>ACCEPT</a>"
          };

          transporter.sendMail(mailoption, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("email sent " + info.response);
            }
          });
     }catch(error){
        console.log("error");
     }
});

router.post('/login', function(req, res){
    userschema.find({
        username:req.body.username,
        password:req.body.password
    }, function(err, documents){
        if(err){
            res.send('Something went wrong');
        }else{
            if(documents.length == 0){
                res.send('Login Failed');
            }else{
                res.send('login');
        
            }
        }
    })
});



module.exports = router;