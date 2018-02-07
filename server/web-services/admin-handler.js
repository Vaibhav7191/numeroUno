const admin=require('../models/admin')
const commonFile=require('../global-files/common-file.js')

module.exports={
	"login":(req,res)=>{
		console.log("request body",req.body);
		new admin(req.body).save((err)=>{
			if(err){		
				return commonFile.responseHandler(res,500,"Internal server error.",err)
			}
			return commonFile.responseHandler(res,200,"Success")
		})		
	}
}