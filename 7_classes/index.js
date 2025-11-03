'use strict'

//#region Intro

// class User {
//     id = 101;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this._email;
//     }
//     set email(val) {
//         this._email = val;
//     }

//     func_1() {}
//     func_2() {}
// }

// console.dir(User);

// // User();          // ERROR

// const user = new User('vasia@mail.com');
// console.log('🟢', user);
// user.func_1();



// ----------------- Отличия от классической функции -----------------
// 1. Нельзя вызывать без new
// 2. Методы класса неперечислимы
// console.log('🟢', Object.getOwnPropertyDescriptors(User.prototype));
// 3. Действует use strict


// ----- class expression -----
// const UserClass = class {
//     render() {
//         console.log('🟢', 'render');
//     }
// };
// new UserClass().render();

//#endregion


//#region Inheritance

// class User {
//     id = 101;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this._email;
//     }
//     set email(val) {
//         this._email = val;
//     }

//     func_1() {}
//     func_2() {}
// }

// class Admin extends User
// {
//     render() {
//         console.log('🟢', this.email);
//     }
// }

// console.dir(User);
// console.dir(Admin);

// const a = new Admin();
// console.log('🟢', a);





// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     connect() {
//         console.log('🟢', `User connected: ${this.email}`);
//     }
// }

// class Admin extends User {
//     // DEFAULT CTOR
//     // constructor(...args) {
//     //     super(...args);
//     // }

//     constructor(email, permissions) {
//         super(email);
//         this.permissions = permissions;
//     }

//     checkRules() {
//         console.log('🟢', `Rules was checked for Admin ${this.email}`);
//     }
//     connect() {
//         super.connect();
//         this.checkRules();
//     }
// }

// const a = new Admin('vasia@mail.com', ['read']);
// a.connect();
// console.dir(a);






// class User {
//     permissions = ['read'];

//     constructor(email) {
//         this.email = email;

//         console.log('🟢', `User ctor: ${this.permissions}`);
//         console.log('🟢', `User ctor: ${this.hp}`);
//         console.log('🟢', `User ctor: ${this.getSlug()}`);
//         this.render();

//         console.log('🟢', '----------------------');
//     }

//     getSlug() {
//         return 'user';
//     }
//     render() {
//         console.log('🟢', this.getSlug());
//     }
// }

// class Admin extends User {
//     permissions = ['read', 'write'];
//     hp = 200;

//     constructor(email) {
//         super(email);
//         console.log('🟢', `Admin ctor: ${this.permissions}`);
//         console.log('🟢', `Admin ctor: ${this.hp}`);
//         console.log('🟢', `Admin ctor: ${this.getSlug()}`);
//     }

//     getSlug() {
//         return super.getSlug();
//         // return 'admin';
//     }
// }

// console.dir(Admin);
// const a = new Admin('vasia@mail.com');
// console.log('🟢', a);







// const user = {
//     render() {
//         console.log('🟢', 'Method render()');
//     },
//     auth: function() {
//         console.log('🟢', 'Property auth');
//     },
//     log: () => console.log('🟢', 'Arrow function log()'),
// };

// const admin = {
//     test() {
//         super.render();
//         super.auth();
//         super.log();
//     },
//     // auth: function() {
//     //     super.auth();
//     // },
//     auth() {
//         super.auth();
//     },

//     __proto__: user,
// };

// // admin.render();
// // admin.auth();
// // admin.log();

// admin.auth();
// admin.test();






// class Unit {
//     handler = function() {}
//     render() {

//     }
// }


//#endregion


//#region static

// class User {
//     static _maxId = 0;
//     _permissions = ['read'];

//     id = 0;

//     get permissions() {
//         return this._permissions;
//     }
//     set permissions(value) {
//         this._permissions = value;
//     }
//     static get maxId() {
//         return this._maxId;
//     }
//     constructor(email) {
//         this.id = ++(User._maxId);
//         this.email = email;
//     }
//     static selfCompare(a, b) {
//         return a.id - b.id;
//     }
//     render() {
//         console.log('🟢', `id: ${this.id}, email: ${this.email}`);
//     }
// }

// console.dir(User);
// const a = new User('vasia@mail.com');
// console.log('🟢', a);





// class User {
//     static _maxId = 0;
//     _permissions = ['read'];

//     id = 0;

//     get permissions() {
//         return this._permissions;
//     }
//     set permissions(value) {
//         this._permissions = value;
//     }
//     static get maxId() {
//         return this._maxId;
//     }
//     constructor(email) {
//         this.id = ++(User._maxId);
//         this.email = email;
//     }
//     static selfCompare(a, b) {
//         return a.id - b.id;
//     }
//     render() {
//         console.log('🟢', `id: ${this.id}, email: ${this.email}`);
//     }
// }

// class Admin extends User {
//     constructor(email) {
//         super(email);
//     }
// }

// console.dir(Admin);
// console.log('🟢', Admin._maxId);
// const a = new Admin('petya@mail.com');
// console.log('🟢', a);

// const id = Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor._maxId;
// console.log('🟢', id);


//#endregion


//#region public / protected / readonly / private

// class User {
//     // public
//     id = 101;

//     // protected
//     _email = '';

//     // readonly
//     _password
//     get password() {return this._password};

//     // private
//     #avatarFile = '';
//     #setAvatarFile(path) {
//         this.#avatarFile = path;
//     }
//     get avatarFile() {
//         return this.#avatarFile;
//     }
//     constructor(path) {
//         this.#setAvatarFile(path);
//     }
// }

// console.dir(User);
// const a = new User('/var/avatars/1.png');
// console.log('🟢', a);
// // a.#setAvatarFile('/')        // ERROR




// class User {
//     #id = 0;
//     #email = '';
//     #pass = '';

//     constructor(id) {
//         this.#id = id;
//     }

//     get email() {
//         return this.#email;
//     }
//     set email(value) {
//         this.#email = this.#prepareEmail(value);
//     }
//     set #password(value) {
//         this.#pass = 'HASH_HASH';
//     }
//     #prepareEmail(email) {
//         return email.toLowerCase();
//     }
//     set password(value) {
//         this.#password = value;
//     }
// }

// const a = new User(101);
// console.log('🟢', a);

//#endregion


//#region Наследование от стандартных классов

// class Container extends Array {
//     constructor(...args) {
//         super(...args);
//     }

//     getCount() {
//         return this.length;
//     }
// }

// const b = new Container(2, 4, 6, 7, 8);
// console.log('🟢', b);
// console.log('🟢', b.getCount());

//#endregion


//#region instanceof

// class User {}

// class Admin extends User {}

// const a = new Admin();

// // хулиганим
// // const p = Object.getPrototypeOf(a);
// // Object.setPrototypeOf(p, Object.prototype);

// console.log('🟢', a instanceof User);

// console.log(Object.getPrototypeOf(a) === User.prototype);                        // false
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(a)) === User.prototype); // true

//#endregion


//#region mixins

// const renderMixin = {
//     render() {
//         console.log('🟢', `id: ${this.id}`);
//     }
// };

// class User {
//     constructor(id) {
//         this.id = id;
//     }
// }

// // User.prototype.render = renderMixin.render;

// Object.assign(User.prototype, renderMixin);

// const user = new User(102);
// user.render();
// console.dir(User);
// console.log('🟢', user);

//#endregion


