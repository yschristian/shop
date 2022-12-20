const { expressjwt: expressJwt } = require('express-jwt');
require('dotenv/config')
const secret = process.env.secret
const api = process.env.API_URl;
const authJwt = expressJwt({
secret,
algorithms:['HS256'],
requestProperty: 'authorization',
isRevoked: isRevoked
 }).unless({
    path: [
         {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
         {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
         {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },

        `/api/v1/users/login`,
        `/api/v1//${api}/users/loginusers/register`
    ]
 })

 async function isRevoked(req, token){
   console.log(token)
    return !token.payload.isAdmin
}
 

module.exports = authJwt;