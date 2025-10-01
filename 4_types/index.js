//#region ================== Symbol =======================

// let a = Symbol();
// console.log('🟢', a);

// let b = Symbol('description');
// let c = Symbol('description');

// console.log('🟢', b === c);






// const user = {
//     email: 'vasia@mail.com',
// };

// const id = 'id';
// user[id] = 101;
// // console.log('🟢', user);

// // console.log('🟢', user[id]);

// for (let key in user)
//     console.log('🟢', key);




// const user = {
//     email: 'vasia@mail.com',
// };

// const id = Symbol('id');
// user[id] = 101;
// // console.log('🟢', user);

// // console.log('🟢', user[id]);


// for (let key in user)
    // console.log('🟢', key);






// const id = Symbol();
// const role = 'role';

// const user = {
//     [id]: 101,
//     [role]: 'admin',
//     email: 'vasia@mail.com',
//     'name': 'Vasia',
//     34: 'value'
// };
// console.log('🟢', user);
// console.log('🟢', user[id]);
// for (let k in user)
//     console.log('🟢', k);






// const a = Symbol.for('a_key');
// const b = Symbol.for('a_key');
// const c = Symbol.for('app.user.id');

// console.log('🟢', a === b);

// console.log('🟢', Symbol.keyFor(a));


//#endregion


//#region ================== Object type casting ===============

// const a = {};
// const b = {};
// console.log('🟢', a + b);


//------ STRING or NUMBER -------

// -------- хинт (hint) ===> 'string' / 'number' / 'default'

// const a = {};
// const b = {};
// b[a] = 101;
// console.log('🟢', b);
// // alert(a);

// const val = Number(a);
// console.log('🟢', val);
// console.log('🟢', +a);

// !!!!!!
// 1. obj[Symbol.toPrimitive](hint)
// 2. 'string' => obj.toString() ---> obj.valueOf()
// 3. 'number'/'default' => obj.valueOf() ---> obj.toString()
// !!!!!!

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     [Symbol.toPrimitive](hint) {
//         console.log('🟢', hint);
//         return hint === 'string' ? `id: ${this.id}, email: ${this.email}` : this.id;
//     },
//     // [Symbol.toPrimitive]: function(hint) {

//     // }
// };

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);
// console.dir(Symbol);


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     toString() {
//         return `id: ${this.id}, email: ${this.email}`;
//     },
//     valueOf() {
//         return this.id;
//     }
// };
// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);



// const user = {
//     toString() {
//         return '101';
//     }
// };
// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);


//#endregion


//#region ================== Itarable object / pseudoarray / array ===================

// ----- Itarable object

// const container = {
//     from: 0,
//     to: 10,

//     [Symbol.iterator]() {
//         return {                                // <---- Объект итератора
//             current: this.from,
//             end: this.to,
//             next() {                            // <---- !!!
//                 if (this.current <= this.end)
//                     return {
//                         done: false,            // <-----
//                         value: this.current++   // <-----
//                     };
//                 else
//                     return {
//                         done: true,
//                     }
//             }
//         };
//     }
// };

// for (let item of container)
//     console.log('🟢', item);

// for (let item of 'Vasia')
//     console.log('🟢', item);


// const str = 'Vasia';
// console.log('🟢', str);
// console.dir(str);
// console.dir(String);


// let iterator = container[Symbol.iterator]();
// console.log('🟢', iterator);
// while(true) {
//     let next = iterator.next();
//     if (next.done)
//         break;
//     console.log('🟢', next.value);
// }



// ------------------ pseudoarray
// const obj = {
//     0: 'Mercury',
//     1: 'Venus',
//     2: 'Earth',
//     3: 'Mars',
//     length: 4,
// };
// for (let item of obj)
//     console.log('🟢', item);



// ---------------- array
// const arr1 = new Array();
// const arr2 = [];

const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
console.log('🟢', planets);
console.log('🟢', planets[1]);
console.log('🟢', planets.length);

console.log('🟢', planets.at(-1));



















