require("dotenv").config();
const axios=require("axios");
exports.getSpotifyAuthToken=function(req,res,next)
{
    const my_clientID=process.env.spotifyClientId;
    const clientSecret=process.env.spotifyClientSecretKey;
    let requestOptions = {
        'method':'POST',
        headers:{
            "Authorization": `Basic ${new Buffer.from(my_clientID+':'+clientSecret).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data:"grant_type=client_credentials"
    }
    axios("https://accounts.spotify.com/api/token", requestOptions).then(response=>{
        req.spotifyAuth=response.data;
        console.log(response.data)
        next();
    }).catch(err=>{
        req.spotifyAuth={
            err:"error occuered"
        }
        next();
    })
}