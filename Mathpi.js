const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);




const myNewObject = {
    name: "Sharmin",
    price: 220,
    isAvailable: true,


    NewObj: function () {
        console.log("Hey give me Coffee");
    }

}
console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));

Object.defineProperty(myNewObject, 'name', {
    // writable: false,
    enumerable: true
})


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));
for (const [key, value] of Object.entries(myNewObject)) {
    if (typeof value !== "function") {

        console.log(`${key}, ${value}`);
    }
}