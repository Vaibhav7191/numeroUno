const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let admin=new Schema({
	name:{
		type:String,
		match:[/^[vaibhav]+$/,"Name does not match my name"] //plug in any regex you want to use.
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