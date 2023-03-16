function createPromise(){
     
    var promise1 = new Promise(function(resolve,reject){
                      resolve({
                        id:101,
                        name:"Kabir Sagar",
                        designation:"SDE"
                      }) // success Response
                    //    reject({
                    //     status:false,
                    //     error:"Due to some network issues"
                    //    }) //: Failure Response 
    }) 

    return promise1
}

function AnotherPromise(data){
      return new Promise((resolve,reject)=>{
                  resolve(data.name)
      })
}

  var promise = createPromise()

    // promise.then(function(success){
    //    // we can perform our actions on success response
    //    console.log("Resolved",success) // {id:"",name:"",des}
    //       return AnotherPromise(success)
    // },function(failure){

    //     //we can perform our action on failure response
    //     console.log("Rejected",failure)
    // }).then((successResponse)=>{

    //     console.log(successResponse)
    // },(failureResponse)=>{
    //     console.log(failureResponse)
    // })


     promise.then((res)=>{
        console.log(res)
     }).then(()=>{

     }).catch((error)=>{
          console.log("Catch-Block:", error)
     })