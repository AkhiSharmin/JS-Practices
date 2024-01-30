
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })



// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(() => {
//     console.log("async 2");
// })


// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ userName: "Akhi", email: "akhi@gmai.com" })
//     }, 1000)
// })

// promiseThree
//     .then((data) => {
//         console.log(data);
//     })



// const promiseFour = new Promise((resolve, reject) => {
//     let error = false;
//     if (!error) {
//         resolve({ userName: "Akhi", pass: "1234" })
//     } else {
//         reject('Error Something went wrong')
//     }
// }, 1000)

// promiseFour.then((user) => {
//     console.log(user.userName);
//     return user.userName
// }).catch((error) => {
//     console.log(error);
// })



// const helloPromise = new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//         if (status) {
//             resolve("Done Broohhh 😁")
//         } else {
//             reject("Ohhh No 😒")
//         }
//     }, 1000);
// })

// helloPromise
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.log(error);
//     }).finally(() => console.log(`The promise is either resolve or reject`))




// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({ userName: "JavaScript", pass: "1234" })
//         } else {
//             reject('Error: Something went wrong')
//         }
//     }, 1000)
// });


// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// async function getUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()
//         console.log(data);
//         // console.log(response);
//     } catch (error) {
//         console.log("E", error);
//     }
// }
// getUser()


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
