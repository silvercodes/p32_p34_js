'use strict'

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

// const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
// console.log('🟢', planets);
// console.log('🟢', planets[1]);
// console.log('🟢', planets.length);

// console.log('🟢', planets.at(-1));




// function f() {
//     console.log('🟢', arguments);
//     console.log('🟢', Array.from(arguments));
// }
// f(2, 3);

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

// console.log('🟢', Array.from(container));
// console.log('🟢', Array.from(container, v => v * 2));

//#endregion


//#region *** Array под капотом

// PACK --> элементы одного типа --> непрерывная область памяти --> O(1)
    // int* arr = new int[1000]{};
    // arr[500] --> *(arr + 500 * sizeof(int))

// Holley arrays --> элементы разного типа или есть дыры --> Динамический массив

// Dictionary Mode --> для очень разреженных массивов --> хэш-таблица --> O(1)

//#endregion


//#region Map / Set / WeakMap / WeakSet

// const map = new Map();
// console.dir(Map);
// console.log('🟢', map);

// map.set('101', 'vasia');
// map.set(101, 'Petya');
// map.set(false, 'Kolya');

// console.log('🟢', map);
// console.log('🟢', map.get(101));
// console.log('🟢', map.size);
// map.size = 10;
// console.log('🟢', map);


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };
// const map = new Map();
// map.set(user, 1000);
// console.log('🟢', map);



// :-)))
// const map = new Map();
// map
//     .set(101, 'vasia')
//     .set(102, 'Petya');


// :-)))
// const map = new Map([
//     ['vasia', 101],
//     ['petya', 200],
//     ['kolya', 300],
// ]);
// console.log('🟢', map);

// console.log('🟢', map.keys());
// for (let key of map.keys())
//     console.log('🟢', key);

// for (let val of map.values())
//     console.log('🟢', val);

// for (let item of map)
//     console.log('🟢', item);

// map.forEach((v, k, m) => {
//     console.log('🟢', v);
// });


//====== object to Map
// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// console.log('🟢', Object.entries(user));
// const map = new Map(Object.entries(user));
// console.log('🟢', map);

// ===== Map to object
// const map = new Map([
//     ['vasia', 101],
//     ['petya', 200],
//     ['kolya', 300],
// ]);
// const obj = Object.fromEntries(map);
// const obj2 = Object.fromEntries(map.entries());
// console.log('🟢', obj);
// console.log('🟢', obj2);




// const set = new Set();
// const a = {id: 101};
// const b = {id: 102};
// const c = {id: 103};

// set.add(a);
// set.add(b);
// set.add(c);
// set.add(a);
// set.add(a);

// console.log('🟢', set);

// for (let item of set)
//     console.log('🟢', item);

// set.forEach(item => console.log('🟢', item));

// const arr = [4, 6, 7, 2, 4, 5, 6, 7];

// console.log('🟢', Array.from(new Set(arr)));





// const wm = new WeakMap();

// let user = {id: 101};

// wm.set(user, 'password');
// console.log('🟢', wm.get(user));

// user = null;

// for (let i = 0; i < 1000000; ++i)
//     i++;

// console.log('🟢', wm);






// const ws = new WeakSet();

// let user = {id: 101};

// ws.add(user);
// console.log('🟢', ws.has(user));

// user = null;

// console.log('🟢', ws.has(user));


//#endregion


//#region Destruction (array, object)

// ---- array

// const arr = ['vasia', 101];
// const [name, id] = arr;             // Деконструирующее присваивание
// console.log('🟢', name, id);


// const arr = ['vasia', 101, 'vasia@mail.com'];
// const [name, , email] = arr;


// const name = 'Vasia';
// const [a, b, c] = name;
// console.log('🟢', a, b, c);


// const user = {};
// const input = "Vasia Ivanov";
// [user.name, user.lastname] = input.split(' ');
// console.log('🟢', user);


// const user = {id: 101, email: 'vasia@mail.com'};
// for (let [k, v] of Object.entries(user))
//     console.log('🟢', k, v);


// const planets = ['Mercury', 'Venus', 'Earth', 'Mars'];
// const [p1, p2, ...other] = planets;
// console.log('🟢', p1, p2, other);


// const [a = 2, b = 'val'] = [100];
// console.log('🟢', a, b);


// let a = 34;
// let b = 56;
// [b, a] = [a, b];
// console.log('🟢', a, b);




// ---- object

// const user = {
//     id: 101,
//     email: 'brus@mail.com',
//     age: 65
// };

// const {id, email} = user;
// const {age} = user;
// console.log('🟢', id, email, age);

// const {id: identity, email} = user;
// console.log('🟢', identity, email);

// const {email = 'no_email', role = 'guest'} = user;
// console.log('🟢', email, role);

// const {
//     id: identity = 0,
//     role: roleTitle = 'guest',
// } = user;

// console.log('🟢', identity, roleTitle);


// const {
//     email: e = 'no_email',
//     ...tail
// } = user;
// console.log('🟢', e, tail);



// const unit = {
//     id: 101,
//     title: 'archer',
//     hp: 50,
//     position: {
//         x: 10,
//         y: 20,
//     },
//     weapon: [
//         'sward',
//         'bow'
//     ]
// };

// let {
//     title: name = 'no_name',
//     position: {
//         x: xCoord = 0
//     },
//     weapon: [
//         priorityWeapon
//     ],
//     ...tail
// } = unit;

// console.log('🟢', name, xCoord, priorityWeapon, tail);
// console.log('🟢', unit);



// function render({
//     title: t = 'no_title',
//     price: p = 0,
//     weapon: [
//         priorityWeapon = 'no_weapon'
//     ]
// }) {
//     console.log('🟢', t, p, priorityWeapon);
// }

// render(unit);



// function render({
//     title: t = 'no_title',
//     price: p = 0,
// } = {}) {
//     console.log('🟢', t, p);
// }

// render({});
// render();

//#endregion


//#region JSON

// const unit = {
//     id: 101,
//     title: 'archer',
//     hp: 50,
//     position: {
//         x: 10,
//         y: 20,
//     },
//     weapon: [
//         'sward',
//         'bow'
//     ]
// };

// const user = {
//     id: 101, 
//     email: 'vasia@mail.com',
//     age: 23,
//     role: 'admin'
// };

// console.log('🟢', JSON.stringify(user));
// console.log('🟢', JSON.stringify(unit));

// const json = JSON.stringify(unit);
// console.log('🟢', json);
// const obj = JSON.parse(json);
// console.log('🟢', obj);



// console.log('🟢', JSON.stringify(user, (k, v) => {
//     return k === 'role' ? undefined : v;
// }));


// console.log('🟢', JSON.stringify(user, null, 4));


// const data = '{"id":101,"title":"laptop","date":"2025-10-08T19:17:30"}';

// // const obj = JSON.parse(data);
// // console.log('🟢', obj);

// const obj = JSON.parse(data, (k, v) => {
//     if (k === 'date')
//         return new Date(v);

//     return v;
// });

// console.log('🟢', obj);

//#endregion
