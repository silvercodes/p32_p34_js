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




function builder(id, email, key, val) {
    return {
        id,
        'email': email,
        [key]: val,
        1: 'test val',
    };
}
const obj = builder(101, 'vasia@mail.com', 'age', 31);
console.log('🟢', obj);