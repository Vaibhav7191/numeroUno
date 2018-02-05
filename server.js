const express=require('express');
const app=require('express')();
let io=require('socket.io')
const server=require('http').createServer(app)
const mongoose=require('mongoose');
const path=require('path')
const bodyParser=require('body-parser');

const admin=require('./routes/admin');
const config=require('./config/config-dev')

mongoose.connect(config.mongodb,{
	// useMongoClient:true
})
mongoose.Promise=global.Promise
let db=mongoose.connection;
db.on('error',console.error.bind(console,"Mongodb connection error."))
db.once('open',()=>{
	console.log("mongodb is up and running.")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true,limit:"2mb"}))

//Uncomment the next line when the AngularJs code is ready.
// app.use(express.static(path.join(__dirname,'assets')));
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*')
	res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
	next();
})

app.use('/admin',admin)

//To use server and socket.io on the same port
io=io.listen(server)
server.on('listening',(err,result)=>{
	console.log("Server is up and listening.")
})
server.listen(config.port,(err,result)=>{
	console.log("Server listening to",config.port,err,result)
})