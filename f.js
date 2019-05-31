const f = (time, callback) => {
    setTimeout(() => {
        callback("hahaha")
    }, time)
}

// f(1000, (res) => {
//     console.log(res.toUpperCase())
// })

const fp = time => new Promise((resolve, reject) => {
    try{
        f(time, (res) => {
            resolve(res.toUpperCase())
        })
    }catch(err){
        reject(err)
    }
})

fp(1000).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

