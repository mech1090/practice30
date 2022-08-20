const User = require('../model/user.model')


const getEmail = (field)=>{
    return User.findOne(field)
}

const createEntries = (feilds)=>{
    return User.create(feilds)
}

module.exports = {getEmail,createEntries}