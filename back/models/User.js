const mongoose=require("mongoose");
const Schema=mongoose.Schema;

let UserSchema=new Schema({
    name:{
        type: String
    },
    Username:{
        type: String
    },
    mobile:{
        type:Number
    },
    email:{
        type:String
    },
     password:{
        type:String
     }

},
{
    collection:'User'
})
module.exports=mongoose.model('User',UserSchema)