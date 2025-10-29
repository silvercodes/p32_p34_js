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

//#region ======= PROTOTYPE

// const unit = {
//     hp: 100,
//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
// };

// const warrior = {
//     title: 'Petya',
//     __proto__: unit,
// };

// archer.__proto__ = unit;

// // console.log('🟢', archer);
// // console.log('🟢', archer.title);
// // console.log('🟢', archer.hp);
// // archer.render();

// // console.log('🟢', warrior);

// archer.hp = 200;
// console.log('🟢', unit);
// console.log('🟢', archer);
// console.log('🟢', warrior);






// const a = {
//     v0: 120,
//     v1: 130,
//     render() {
//         console.log('🟢', `${this.v0}, ${this.v1}`);
//     }
// };

// const b = {
//     v0: 140,
// };
// b.__proto__ = a;

// const c = {
//     v1: 150,
// }
// c.__proto__ = b;

// console.log('🟢', c);

// b.render();
// c.render();






// ----------- example with accessors and methods

// const unit = {
//     hp: 100,
//     _level: 0,

//     get level() {
//         return this._level;
//     },
//     set level(val) {
//         this._level = val;
//     },
//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log('🟢', `hp: ${this.hp}, level: ${this.level}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };


// archer.hp = 500;
// archer.level = 20;                      // archer.set level(20)
// console.log('🟢', archer.level);        // archer.get level()

// unit.showInfo();
// archer.showInfo();

// console.log('🟢', archer);


//#endregion

//#region FOR / IN

// const unit = {
//     hp: 100,
//     _level: 0,

//     get level() {
//         return this._level;
//     },
//     set level(val) {
//         this._level = val;
//     },
//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log('🟢', `hp: ${this.hp}, level: ${this.level}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };

// console.dir(archer);

// for (let prop in archer) {
//     console.log('🟢', prop);
// }

// console.log('🟢', Object.getOwnPropertyDescriptors(archer.__proto__.__proto__));

// for (let prop in archer) {
//     if (archer.hasOwnProperty(prop))
//         console.log('🟢', prop);
// }

//#endregion

//#region FUNCTION_CONSTRUCTOR

// const user = {
//     id: 101,
// };

// function Admin() {
//     // this === {};

//     this.role = 'admin';
//     this.__proto__ = user;

//     // return this;
// }

// const admin = new Admin();
// console.log('🟢', admin);




// const user = {
//     id: 101,
// };

// const test = {
//     test: 0,
// };

// function Admin() {
//     // const this = {};
//     // this.__proto__ = Admin.prototype

//     this.role = 'admin';

//     // return this;
// }

// Admin.prototype = user;

// console.dir(Admin);

// const admin = new Admin();
// console.log('🟢', admin);

// Admin.prototype = test;
// console.log('🟢', new Admin());



// const user = {
//     id: 101,
// };

// function Admin() {
//     this.role = 'admin';
// }

// console.dir(Admin);
// const admin = new Admin();
// console.log('🟢', admin);
// const admin2 = new admin.constructor();
// console.log('🟢', admin2);




// function User(email) {
//     this.email = email;
// }

// User.prototype.render = function() {
//     console.log('🟢', `email: ${this.email}`);
// };

// console.dir(User);

// const user = new User('vasia@mail.com');
// console.log('🟢', user);
// user.render();




//#endregion

//#region EMBEDDED PROTOTYPES

// const a = {};
// const b = new Object();

// console.dir(Object);
// console.log('🟢', a);
// console.log('🟢', b);
// console.log('🟢', String(a));



// function f() {}
// const f1 = new Function();

// console.dir(Function);
// console.dir(f);
// console.dir(f1);




// const a = [1, 2, 3];
// const b = new Array(1, 2, 3);

// console.dir(Array);
// console.log('🟢', a);
// console.log('🟢', b);
// console.log('🟢', String(a));




// console.dir(Map);
// console.dir(Number);
// console.dir(Boolean);
// console.dir(String);
// console.dir(Symbol);





String.prototype.hohoho = function() {
    console.log('🟢', 'hohoho');
};

'Vasia'.hohoho();

//#endregion
