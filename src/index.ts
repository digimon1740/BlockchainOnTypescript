// interface Human {
//     name : string,
//     age : number,
//     gender : string
// }
//
// const person = {
//     name : "Tony",
//     age : 31,
//     gender : "male"
// };

class Human {
    public name: string;
    public age: number;
    public gender: string;

    // ?는 옵셔널
    constructor(name, age, gender?) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const tony = new Human("tony", 30, "male");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(tony));

// const sayHi = (name: string, age: number, gender: string): string=> {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// };
//
// console.log(sayHi("Tony", 20, "male"));

export {};