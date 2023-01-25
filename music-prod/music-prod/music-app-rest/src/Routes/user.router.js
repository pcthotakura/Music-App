const express=require("express");
const UserRouter=express.Router();
const musicController=require("../Controller/Music.controller");
const userController=require("../Controller/User.controller");
const spotifyMiddleware=require("../Middleware/spotify.middleware")
UserRouter.get("/getArtists",[spotifyMiddleware.getSpotifyAuthToken],musicController.getArtistsData)
UserRouter.get("/getAlbums",[spotifyMiddleware.getSpotifyAuthToken],musicController.getAlbumsData)
UserRouter.get("/getAlbumsByArtistId",[spotifyMiddleware.getSpotifyAuthToken],musicController.getAlbumsByArtistId);
UserRouter.get("/getTracksByAlbumId",[spotifyMiddleware.getSpotifyAuthToken],musicController.getTracksByAlbumId);
UserRouter.get("/getTopData",[spotifyMiddleware.getSpotifyAuthToken],musicController.getTopData);
UserRouter.post("/userLogin",userController.loginUser);
UserRouter.post("/registerUser",userController.registerUser);
UserRouter.get("/getUsersList",userController.getUsersList)
module.exports=UserRouter