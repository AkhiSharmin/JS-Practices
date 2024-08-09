// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// buttons.forEach((button) => {
//     // console.log(button);
//     button.addEventListener('click', function (event) {
//         // console.log(event);
//         // console.log(event.target);
//         if (event.target.id === "grey") {
//             body.style.backgroundColor = event.target.id
//         }
//         if (event.target.id === "white") {
//             body.style.backgroundColor = event.target.id
//         }
//         if (event.target.id === "blue") {
//             body.style.backgroundColor = event.target.id
//         }
//         if (event.target.id === "yellow") {
//             body.style.backgroundColor = event.target.id
//         }
//     })
// })


const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', function (e) {
        // console.log(e);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
        }
    })
})