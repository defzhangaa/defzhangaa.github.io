// 定义变量
let foo

// 初始化函数
$(function () {
    clock();
})

// This function is contributed by my best Huachao Shan.
// 定义函数
function bar() {

}

function clock() {
    const day = [ 'Mon', 'Tue', 'Wednes', 'Thurs', 'Fri', 'Sat','Sun'] // 定义一个数组day，包含了一周中每一天的汉字表示
    setInterval(function () { // 创建一个定时器
      const date = new Date() // 获取当前时间并存储在变量date中
      let nowHours = date.getHours() // 获取当前时间的小时数
      let nowMinutes = date.getMinutes() // 获取当前时间的分钟数
      let nowSecond = date.getSeconds() // 获取当前时间的秒数
      const nowYear = date.getFullYear() // Get year
      const nowMonth = date.getMonth() // 获取当前月份
      const nowDate = date.getDate() // 获取当前日期
      const nowDay = date.getDay() // 获取当前星期几对应的数字
      nowHours = nowHours < 10 ? '0' + nowHours : nowHours // 如果当前小时数小于10，则在前面添加0
      nowMinutes = nowMinutes < 10 ? '0' + nowMinutes : nowMinutes // 如果当前秒数小于10，则在前面添加0
      nowSecond = nowSecond < 10 ? '0' + nowSecond : nowSecond // 如果当前秒数小于10，则在前面添加0
      // 将当前时间显示在.oneDay的div容器中
      document.querySelector('.oneDay').innerHTML = `${nowHours}:${nowMinutes}:${nowSecond} &nbsp ${nowMonth + 1}/${nowDate}/${nowYear}`
    }, 1000) // 设置定时器的时间间隔为1000毫秒
 
    // setInterval(function () { // 创建另一个定时器
    //   const date = new Date() // 获取当前时间并存储在变量date中
    //   const nowYear = date.getFullYear() // Get year
    //   const nowMonth = date.getMonth() // 获取当前月份
    //   const nowDate = date.getDate() // 获取当前日期
    //   const nowDay = date.getDay() // 获取当前星期几对应的数字
    //   // 将当前日期和星期几以及月份显示在.month的p容器中
    //   document.querySelector('.month').innerHTML = `${nowMonth + 1}/${nowDate}/${nowYear}/&nbsp${day[nowDay-1]}day`
    // }, 1000) // 设置定时器的时间间隔为1000毫秒
}