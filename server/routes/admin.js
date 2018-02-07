const adminRoutes=require('express').Router()
const admin=require('../web-services/admin-handler.js')

adminRoutes.post('/login',admin.login);

module.exports=adminRoutes;