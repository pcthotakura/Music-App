const jwt=require('jsonwebtoken');
const privateKey="shhhw;kjebwkfwfbwfbeebrfelwgekvwtgbjrgbkegqglrkrg;wlrtg.vlv'prghhshhhhh"
exports.generateToken=function(userData)
{
   return jwt.sign(userData,privateKey)
}

exports.compareToken=function(token)
{
    return jwt.decode(token);
}