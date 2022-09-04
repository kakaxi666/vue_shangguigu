/**
 * @desc 函数防抖
 * @param fnName 函数
 * @param time 延迟执行毫秒数
 */
 export default function VueDebounce(fnName, time) {
    let timer = null;
    return function(){
        
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fnName()
        },time)
    }
  }