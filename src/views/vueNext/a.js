/**
 *
 * @author  晴云
 * @create 2021-01-21 17:04
 * @note 干什么的呢？
 **/

function timer(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

async function test() {
    //2s后输出2，5s后输出5,1   同时发起请求，但是执行结果是有先后顺序的
    let proList = [timer(2000), timer(5000), timer(1000)]
    for await (let pro of proList) {
        console.log('这里是 pro 的结果-------------', pro)
    }

    //1s 后输出1000 ，再过1s输出2000,再过3s输出5000
    /*    let proList= [timer(2000),timer(5000),timer(1000)]
     for   (let pro of proList){
         console.log('这里是 pro 的结果-------------', pro.then(v=>console.log(v)))
     }*/

    //2s 后输出2000， 再过5秒输出5000，再过  1 s 输出1000
    /*    let a=await timer(2000)
    console.log('这里是 a 的结果-------------', a)
    let b =await timer(5000)
    console.log('这里是 b 的结果-------------', b)

    let c =await timer(1000)
    console.log('这里是 c 的结果-------------', c)*/
}
test()
