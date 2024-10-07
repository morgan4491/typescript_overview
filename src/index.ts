let userInfo: string = 'JD';
let num: number = 10;
let isCool: boolean = true;
let fruits: String[] = ['orange', 'apple', 'orange'];
let strictArray: [String, Number] = ['JD', 44]

function add(a: number, b: number): number {
    // console.log(a + b);
    return a + b;
}

// console.log(add(10, 5)); // REMEMBER, when you call a function, you NEED to feed it arguments


type User = {       // This is defining a type of object, in this case defining the 'User' type
    name: string;
    age: number;
};

type Details = {
    phone: string;
    address: string;
    hobbies?: String[]
}

const jd = {
    name: 'JD',
    age: 44
}

const jdDetails = {
    phone: '777-777-7777',
    address: '555 coding dr',
    hobbies: ['fishing', 'pickleball']
}


function printUserInfo(userObj: User, detailsObj: Details) {
    console.log(`${userObj.name} is ${userObj.age} years old. They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}.`);
    if (detailsObj.hobbies) {
        console.log(`${userObj.name} likes to ${detailsObj.hobbies[0]}`);
    }
}

printUserInfo(jd, jdDetails);



// if (typeof userInfo === 'string') {  // This if (typeof) statement checks/confirms the value type
//     console.log(userInfo.toLowerCase())
// }

// if (typeof userInfo === 'number') {
//     console.log(Math.round(userInfo))
// }
