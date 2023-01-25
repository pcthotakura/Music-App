

const spotifyModel=require("../Model/Spotify.model")

exports.getArtistsData=function(req,res)
{
    try{
        let ArtistName=req.query.name
        spotifyModel.getArtists(req.spotifyAuth.access_token,ArtistName).then(responseData=>{
            console.log("---success---",responseData.data)
            res.json(responseData.data)
        }).catch(err=>{
            console.log("----error----",err)
            res.json({
                errorMessage:'Unable to get data from spotify'
            })
        })

    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get Artist Data"
        })
    }

    

}


exports.getAlbumsData=function(req,res)
{
    try{
        let AlbumName=req.query.name
        spotifyModel.getAlbums(req.spotifyAuth.access_token,AlbumName).then(responseData=>{
            console.log("---success---",responseData.data)
            res.json(responseData.data)
        }).catch(err=>{
            console.log("----error----",err)
            res.json({
                errorMessage:'Unable to get data from spotify'
            })
        })

    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get Artist Data"
        })
    } 
}




exports.getTopData=function(req,res)
{
    try
    {
        let type=req.query.type;
        // res.json({type:type})
        console.log(req.spotifyAuth.access_token)
        spotifyModel.getTopData(type,req.spotifyAuth.access_token).then(respdata=>{
            let response=respdata.data;
            res.json(response)
        }).catch(err=>{
            console.log(err)
            res.json({
                errorMessage:"Unable to get response"
            })
        })
    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get top data"
        })
    }
}



exports.getAlbumsData=function(req,res)
{
    try{
        let AlbumName=req.query.name;
        spotifyModel.getAlbums(req.spotifyAuth.access_token,AlbumName).then(resdata=>{
            res.json(resdata.data)
        }).catch(err=>{
            console.log(err)
            res.json({
                errorMessage:"Unable to get Albums"
            })
        })

    }catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get Albums"
        })
    }
}


exports.getAlbumsByArtistId=function(req,res)
{
    try{
        let ArtistId=req.query.id
        spotifyModel.getAlbumsByArtistId(ArtistId,req.spotifyAuth.access_token).then(resData=>{
            console.log(resData)
            res.json(resData.data)
        }).catch(err=>{
            console.log(err);
            res.json({
                errorMessage:"Unable to get Albums"
            })
        })
    }
    catch(e)
    {
        console.log(e)
        res.json({errorMessage:"Unable to get allbums"})
    }
}
exports.getTracksByAlbumId=function(req,res)
{
    try{
        let AlbumId=req.query.id
        spotifyModel.getTracksByAlbumId(AlbumId,req.spotifyAuth.access_token).then(resData=>{
            res.json(resData.data);
        }).catch(err=>{
            console.log(err)
            res.json({
                errorMessage:"Unable to get tracks"
            })
        })
    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get all tracks"
        })

    }
}