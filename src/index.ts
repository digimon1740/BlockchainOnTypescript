interface Human {
    name : string,
    age : number,
    gender : string
}

const person = {
    name : "Tony",
    age : 31,
    gender : "male"
};

const sayHi = (person:Human): string=> {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

// const sayHi = (name: string, age: number, gender: string): string=> {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };
//
// console.log(sayHi("Tony", 20, "male"));

export {};