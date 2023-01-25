//const userModel=require("../Model/User.model");
const bcrypt=require("../utils/bcrypt.util");
const jwtUtil=require("../utils/jwt.util")
const userfire=require("../Model/UserFirebase.model")
exports.loginUser=async function(req,res)
{
    try{

        var email=req.body.email;
        var password=req.body.password;
       
        userfire.getUserByEmail(email).then(async(data)=>{
            var userData=data.data;
            console.log("---userdata----",userData)
            var cond=await bcrypt.compare_password(password,userData.password)
            delete userData.password;
            console.log(cond)
            if(cond.toString()=="true")
            {
                res.json({
                    status:'loggedin',
                    token:jwtUtil.generateToken(userData)
                })
            }
            else
            {
                res.json({
                    errorMessage:'failed to login'
                })
            }
        }).catch(e=>{
            console.log(e)
            res.json({
                errorMessage:"Unable to login user"
            })
        })
        // userModel.getUserByEmail(email).then(async (resp)=>{
        //     console.log(resp)
        //     let userData=resp[0][0]
        //     userData=JSON.parse(JSON.stringify(userData))
        //     var cond=await bcrypt.compare_password(password,userData.password)
        //     delete userData.password;
        //     console.log(cond)
        //     if(cond.toString()=="true")
        //     {
        //         res.json({
        //             status:'loggedin',
        //             token:jwtUtil.generateToken(userData)
        //         })
        //     }
        //     else
        //     {
        //         res.json({
        //             errorMessage:'failed to login'
        //         })
        //     }
        // }).catch(e=>{
        //     console.log(e)
        //     res.json({
        //         errorMessage:"Unable to login user"
        //     })
        // })
    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get username"
        })
    }

}


exports.registerUser=async function(req,res)
{
    try{
        var data={
            name:req.body.name,
            email:req.body.email,
            password:await bcrypt.encryptpassword(req.body.password)
        }
            await userfire.saveUser(data).then(status=>{
                res.json({
                    status:"user added successfully"
                })
            }).catch(err=>{
                res.json({
                    errorMessage:'unable to add user'
                })
            })
           
       
        // userModel.registerUser(data).then(resp=>{
        //     res.json({
        //         status:"User registered successfully"
        //     })
        // }).catch(err=>{
        //     console.log(err)
        //     res.json({
        //         errorMessage:"Unable to add register user"
        //     })
        // })
    }
    catch(e)
    {
        console.log(e)
        res.json({
            errorMessage:"Unable to get users"
        })
    }
}


exports.getUsersList=function(req,res)
{
    try{
        userfire.getUsers().then(users=>{
            res.json(users)
        }).catch(err=>{
            console.log(err);
            res.json({
                errorMessage:"Unable to get users data"
            })
        })
    }
    catch(e)
    {
        console.log(e)
        res.json(e)

    }
}
