const axios=require("axios");
var Headers={headers:{
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Authorization':''
}}
exports.getArtists=function(Auth,ArtistName)
{
    Headers.headers.Authorization=`Bearer ${Auth}`;
    return axios.get("https://api.spotify.com/v1/search?q="+ArtistName+"&type=artist",Headers)
}


exports.getAlbums=function(Auth,AlbumName)
{
    Headers.headers.Authorization=`Bearer ${Auth}`
    return axios.get("https://api.spotify.com/v1/search?q="+AlbumName+"&type=album",Headers)
}


exports.getAlbumsById=function(AlbumId,Auth)
{
    Headers.headers.Authorization=`Bearer ${Auth}`
}


exports.getAlbumsByArtistId=function(artistId,Auth)
{
    Headers.headers.Authorization=`Bearer ${Auth}`
    return axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`,Headers);
}


exports.getTracksByAlbumId=function(albumId,Auth)
{
    Headers.headers.Authorization=`Bearer ${Auth}`
    return axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`,Headers);
}


exports.getTopData=function(type,Auth)
{
    Headers.headers.Authorization=`Bearer ${Auth}`
    return axios.get(`https://api.spotify.com/v1/me/top/${type}`)
}