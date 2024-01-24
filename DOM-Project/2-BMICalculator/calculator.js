const form = document.querySelector('form')


form.addEventListener('submit', function (e) {
    // console.log(e);
    e.preventDefault()

    const height = parseInt((document.querySelector('#height').value))
    const weight = parseInt((document.querySelector('#weight').value))
    const results = document.querySelector('#results')



    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give me valid Height ${height}`
    }


    else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give me valid weight ${weight}`
    }


    else {
        const bmi = (weight / (height * height)).toFixed(2)
        console.log(bmi);
        if (parseInt(bmi) < 18) {
            results.innerHTML = `<span>Result: Under Weight ${bmi}</span>`

        } else if (parseInt(bmi) > 18 && parseInt(bmi) < 24) {
            results.innerHTML = `<span>Result: Normal Range ${bmi}</span>`

        } else {
            results.innerHTML = `<span>Result: Overweight ${bmi}</span>`
        }
    }
})




// const form = document.querySelector("form")

// form.addEventListener("submit", function (e) {
//     e.preventDefault()


//     const height = parseInt((document.querySelector("#height").value));
//     const weight = parseInt((document.querySelector("#weight").value));

//     const results = document.querySelector("#results")

//     if (height === "" || height < 0 || isNaN(height)) {
//         results.innerHTML = `Please Input a Valid Number ${height}`
//     }
//     else if (weight === "" || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please Input a Valid Number ${weight}`
//     } else {
//         const bmi = (weight / ((height * height) / 1000)).toFixed(2);
//         results.innerHTML = `<span>Result: ${bmi}</span>`
//     }

// })


// const form = document.querySelector("form")

// form.addEventListener('submit', function (e) {

//     e.preventDefault()

//     const height = parseInt((document.querySelector("#height").value));

//     const weight = parseInt((document.querySelector("#weight").value));

//     const result = document.querySelector("#results")

//     if (height === '' || height < 0 || isNaN(height)) {
//         result.innerHTML = `Please enter a valid Number ${height}`
//     }
//     else if (weight === '' || weight < 0 || isNaN(weight)) {
//         result.innerHTML = `Please enter a valid Number ${weight}`
//     } else {
//         const calculate = (weight / ((height * height) / 1000))
//         result.innerHTML = `<span>Result: ${calculate}</span>`
//     }

// })