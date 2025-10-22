'use strict'
//#region ======= PROPERTY-DATA

// const user = {
//     id: 101, 
//     email: 'vasia@mail.com',
// };

// user.age = 45;

// Object.defineProperty(user, 'age', {
//     writable: false,
//     value: 18,
// });

// user.age = 45;

// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.defineProperty(user, 'email', {
//     value: 'petya@mail.com',
//     writable: false,
// });
// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.defineProperty(user, 'age', {
//     enumerable: false,
//     writable: true,
//     value: 18,
// });
// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// for (let key in user)
//     console.log('🟢', key);

// Object.defineProperty(user, 'age', {
//     configurable: false,
// });

// delete user.age;            // ERROR


// console.log('🟢', Math);
// // console.log('🟢', Object.getOwnPropertyDescriptor(Math, 'PI'));
// console.table('🟢', Object.getOwnPropertyDescriptors(Math));

// Math.sin = function() {console.log('🟢', 'hohoho');}
// Math.sin();

// console.log('🟢', Object.getOwnPropertyDescriptors(globalThis));


// const obj = Object.defineProperties({}, {
//     id: {
//         value: 101,
//         writable: true,
//         configurable: true,
//     },
//     render: {
//         value: function() {
//             console.log('🟢', this.id);
//         },
//         configurable: true,
//     }
// });

// obj.render();
// console.log('🟢', Object.getOwnPropertyDescriptors(obj));


// Object.seal(user);
// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.freeze(user);
// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.preventExtensions(user);
// user.age = 34;
// console.log('🟢', Object.getOwnPropertyDescriptors(user));


//#endregion

//#region ======= PROPERY-ACCESSOR

// const user = {
//     id: 101,
//     _email: '',
//     _pass: '',

//     get email() {
//         return this._email;
//     },

//     set email(value) {
//         this._email = value;
//     },

//     get info() {
//         return `id: ${this.id}, email: ${this._email}`;
//     }
// };

// console.log('🟢', user);
// user.email = 'petya@mail.com';
// console.log('🟢', user.email);
// console.log('🟢', user.info);

// console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.defineProperty(user, 'password', {
//     configurable: true,
//     get: function() {
//         return this._pass;
//     },
//     set: function(value) {
//         this._pass = value;
//     }
// });

// console.log('🟢', Object.getOwnPropertyDescriptors(user));

//#endregion









