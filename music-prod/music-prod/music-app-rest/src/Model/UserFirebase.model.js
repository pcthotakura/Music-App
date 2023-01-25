const firebaseStore = require("../Config/firebase.config")
const validator=require("./Validate.model");
// const firebaseConfig = {
//     apiKey: "AIzaSyCSGjK6GPBE5NSCGCfvhCyywrFqALqIvqk",
//     authDomain: "plugin-music-app.firebaseapp.com",
//     projectId: "plugin-music-app",
//     storageBucket: "plugin-music-app.appspot.com",
//     messagingSenderId: "574318857264",
//     appId: "1:574318857264:web:55c564b79635c2bd84b1f5",
//     measurementId: "G-4W1XET9QTF"
//   };
// async function configFirebase()
// {
//      firebase.initializeApp(firebaseConfig);
//      return firebase.database();
  
// }
exports.saveUser=async function(userData)
{
    return new Promise(function(resolve,reject){
        validator.getEmail("users",userData.email).then(async(data)=>{
            if(data.status==false)
            {
                await firebaseStore.collection("users").doc().set(userData);
                resolve({
                    status:true
                })
            }
            else    
                reject({
                    status:false
                })
            
        })
    })
    
}

exports.getUserByEmail=function(email){
    return new Promise(function(resolve,reject){
        validator.getEmail("users",email).then(data=>{
            if(data.status==true)
            {
                resolve({
                    status:true,
                    data:data.data
                })
            }
            else    
                reject({
                    status:false
                })
        })
    });
}





exports.getUsers=function()
{
    return new Promise(function(resolve,reject){
        firebaseStore.collection("users").get().then(data=>{
            var userdata=data;
            var users=[]
            userdata.docs.forEach(item=>{
                users.push(item.data())
            })
            resolve(users)
        }).catch(err=>{
            reject(err)
        })
    })
    
}