module.exports={
	responseHandler:(res,code,message,data)=>{
		res.status(code).send({responseCode:code,responseMessage:message,data:data})
	}
}