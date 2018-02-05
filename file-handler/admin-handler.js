const admin=require('../models/admin')
const commonFile=require('../file-handler/common-file.js')

module.exports={
	"login":(req,res)=>{
		console.log("return statement",req.body,req.query);
		new admin(req.body).save((err)=>{
			if(err){
				// console.log(err)			
				return commonFile.responseHandler(res,400,"Internal server error.",err)
			}
			return commonFile.responseHandler(res,200,"Success")
		})		
	}
}