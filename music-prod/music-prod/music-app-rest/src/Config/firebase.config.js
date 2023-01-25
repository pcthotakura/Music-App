var admin = require("firebase-admin");
var serviceAccount = require("../Assets/plugin-music-app-firebase-adminsdk-6j2f2-a148724bc9.json");
const firedb=admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const usersdb=firedb.firestore();
module.exports=usersdb