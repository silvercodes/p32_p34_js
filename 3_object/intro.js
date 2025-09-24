'use strict'

// const a = {};
// const b = new Object();


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read'
// };

// // console.log('🟢', user.id);
// // user.email = 'petya@mail.com';

// // console.log('🟢', user);


// console.log('🟢', user['id']);
// user['email'] = 'petya@mail.com';
// user['main permission'] = 'write';
// console.log('🟢', user);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read'
// };

// const key = 'email';
// user[key] = 'petya@mail.com';
// console.log('🟢', user);




// const key = 'age';

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     [key]: 23,
// };
// console.log('🟢', user);




// function builder(id, email, key, val) {
//     return {
//         id,
//         'email': email,
//         [key]: val,
//         1: 'test val',
//     };
// }
// const obj = builder(101, 'vasia@mail.com', 'age', 31);
// console.log('🟢', obj);





// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {},
//     34: 34,
// };
// console.log('🟢', obj);





// function f(user) {
//     // console.log('🟢', user.email === undefined);

//     console.log('🟢', 'email' in user);
// }

// f({
//     id: 101,
//     // email: undefined
// });




// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {},
//     34: 34,
// };
// console.log('🟢', obj);
// console.log('🟢', JSON.stringify(obj));
// obj.email = 'vasia@mail.com';
// console.log('🟢', obj);
// console.log('🟢', JSON.stringify(obj));







// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read'
// };

// for (let key in user)
//     console.log('🟢', `key: ${key}, value: ${user[key]}`);






// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     23: 'one',
//     12: 'two',
//     34.5: 'three'
// };

// for (let key in user)
//     console.log('🟢', `key: ${key}, value: ${user[key]}`);






// const codes = {
//     '+56': 'country_1',
//     '+43': 'country_2',
//     '+48': 'country_3',
// };
// // console.log('🟢', codes);
// for (let key in codes)
//     console.log('🟢', `key: ${key}, value: ${codes[key]}`);






// let a = {
//     id: 101,
// };

// let b = a;

// b.id = 202;
// console.log('🟢', a);

// console.log('🟢', a == b);
// console.log('🟢', a === b);






// const a = {
//     id: 101,
// };

// const b = {
//     id: 101,
// };

// console.log('🟢', a == b);
// console.log('🟢', a === b);

// console.log('🟢', a > 4);
// console.log('🟢', a == 4);
