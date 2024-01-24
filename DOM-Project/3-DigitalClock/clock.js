const clock = document.getElementById('clock')
// const clock = document.getElementById('#clock')

const date = document.getElementById('date')




setInterval(() => {
    let time = new Date()
    let myDate = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = time.toLocaleTimeString()
    date.innerHTML = myDate.toLocaleDateString()
}, 1000)