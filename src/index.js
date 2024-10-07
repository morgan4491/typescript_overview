var userInfo = 'JD';
var num = 10;
var isCool = true;
var fruits = ['orange', 'apple', 'orange'];
var strictArray = ['JD', 44];
function add(a, b) {
    // console.log(a + b);
    return a + b;
}
var jd = {
    name: 'JD',
    age: 44
};
var jdDetails = {
    phone: '777-777-7777',
    address: '555 coding dr',
    hobbies: ['fishing', 'pickleball']
};
function printUserInfo(userObj, detailsObj) {
    console.log("".concat(userObj.name, " is ").concat(userObj.age, " years old. They live at ").concat(detailsObj.address, " and you can reach them at ").concat(detailsObj.phone, "."));
    if (detailsObj.hobbies) {
        console.log("".concat(userObj.name, " likes to ").concat(detailsObj.hobbies[0]));
    }
}
printUserInfo(jd, jdDetails);
// if (typeof userInfo === 'string') {  // This if (typeof) statement checks/confirms the value type
//     console.log(userInfo.toLowerCase())
// }
// if (typeof userInfo === 'number') {
//     console.log(Math.round(userInfo))
// }
