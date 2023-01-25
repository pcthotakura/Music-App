const firedb=require("../Config/firebase.config");


exports.getEmail=function(collection,param)
{
    return new Promise(function(resolve,resject)
    {
        firedb.collection(collection).get().then(data=>{
            var userdata=data.docs.find(item=>item.data().email==param).data();
            if(userdata==undefined)
            {
                resolve({
                    status:false
                })
            }else
            {
                resolve({
                    status:true,
                    data:userdata
                })
            }
        })
    })
}