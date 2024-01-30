// let myName = "Sharmin     "

// // console.log(myName.trim().length);
// console.log(myName.trueLength);



// let myHeros = ["spiderMan", "thor"]

// let heroPower = {
//     thor: "Hammer",
//     spiderMan: "sling",

//     getSpiderPower: function () {
//         console.log(`Spidy power is ${this.spiderMan}`);
//     }
// }

// Object.prototype.sharmin = function () {
//     console.log(`Sharmin is present in all object`);
// }


// Array.prototype.heyAkhi = function () {
//     console.log(`Hey Akhi are your here`);
// }

// // heroPower.sharmin()
// myHeros.sharmin()
// myHeros.heyAkhi()
// // heroPower.heyAkhi()




const User = {
    name: "sharmin",
    email: "sharmin@gmail.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)