const mongoose=require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/DataAssocaitionTestApp`);

const userSchema=mongoose.Schema({
    // username:String,
        usernanme:{
            type:String
        },
        email:String,
        age:Number,
        posts:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"post"
            }
        ]
})

module.exports=mongoose.model("user",userSchema);