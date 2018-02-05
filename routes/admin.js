const adminRoutes=require('express').Router()
const admin=require('../file-handler/admin-handler.js')

adminRoutes.post('/login',admin.login);

module.exports=adminRoutes;