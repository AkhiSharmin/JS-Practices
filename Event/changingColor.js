// generate random color 

// const randomColor = () => {
//     const hex = '0123456789ABCDEF';
//     let color = '#';

//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)]
//         console.log(color);
//     }
//     return color;
// }

// let intervalId;

// const startChangingColor = () => {
//     if (!intervalId) {
//         intervalId = setInterval(changingBgColor, 1000)
//     }

//     function changingBgColor() {
//         document.body.style.backgroundColor = randomColor()
//     }
// }

// const stopChangingColor = () => {
//     clearInterval(intervalId)
// }

// document.querySelector("#start").addEventListener('click', startChangingColor)

// document.querySelector("#stop").addEventListener('click', stopChangingColor)





const randomColor = () => {
    let hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
    }
    return color;
}

let intervalId;

const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(changingBg, 1000)
    }

    function changingBg() {
        document.body.style.backgroundColor = randomColor()
    }
}

function stopChangingColor() {
    clearInterval(intervalId)
}


document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)













// const randomColor = () => {
//     let hex = '0123456789ABCDEF'
//     let color = "#"

//     for (let i = 0; i < 6; i++) {
//         color += hex[(Math.floor(Math.random() * 16))]
//     }
//     return color;
// }

// let intervalId;

// const startChangingColor = () => {
//     if (!intervalId) {
//         intervalId = setInterval(ChangingColor, 1000)
//     }
//     function ChangingColor() {
//         document.body.style.backgroundColor = randomColor()
//     }
// }

// function stopChangingColor() {
//     clearInterval(intervalId)
// }

// document.querySelector('#start').addEventListener('click', startChangingColor)
// document.querySelector('#stop').addEventListener('click', stopChangingColor)