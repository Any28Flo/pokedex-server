const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userChema = new Schema({
        name :{ type: String, required: true, unique:true, maxLength:20, trim: true},
        password :{type : String, required: true, trim: true, maxLength: 10},
        email : { type :String, required: true, unique: true, trim:true, maxLength:20},
        avatarUrl : {type : String, required:true}

    },
    {
        timestamps: {createdAt: "created_at" , updatedAt : "updated_at"}
    });
const User = mongoose.model('User', userChema);
module.exports = User;
