// let age: number = 50;

// age = '50';   // if you try and reassign age to a string, and run index.ts after already declaring age as a number, it will give you an error

// console.log(age);



function getUserInput () {
    const userName = prompt('Please type your name');
    const age: any = prompt('Please enter your age');

    const userData = {
        userName: userName,
        age: age
    };

    return userData;
}

const data = getUserInput();

console.log(data);
