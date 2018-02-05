const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let admin=new Schema({
	name:{
		type:String
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	phone:{
		type:String
	},
	password:{
		type:String
	}
})

module.exports=mongoose.model('admin',admin,'admin');

// admin.pre('save',())