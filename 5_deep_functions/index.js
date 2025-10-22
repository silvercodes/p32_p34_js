'use strict'

//#region Intro

// let a = 45;
// function f() {
//     console.log('🟢', a);
// }
// f();



// function f1() {
//     f2();
//     f3();

//     function f2() {
//     }
//     const f3 = function() {};
//     f2();
// }
// f1();



// function creator() {
//     let count = 0;

//     return function() {
//         return count++;
//     }
// }

// const a = creator();
// const b = creator();

// console.log('🟢', a());
// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());
// console.log('🟢', b());

//#endregion

//#region LE

// PIC_1
// let a;
// a = 10;

// let b = 12;

// const f1 = function() {
//     let a;
//     a = 100;
//     let b = 120;

//     const f1 = function() {
//         console.log('🟢', a);
//     };

//     const f2 = () => console.log('🟢', b);

//     f1();

//     function f0() {
//         let c = 100;
//         console.log('🟢', 'c', c);
//         console.log('🟢', 'b', b);
//         console.log('🟢', 'x', x);
//     }

// };

// const f2 = () => console.log('🟢', 'arrow test');

// f1();

// function f0() {
//     let c = 10;
//     console.log('🟢', 'c', c);
//     console.log('🟢', 'b', b);
//     console.log('🟢', 'x', x);
// }

// f0();



// ----------------------------------------------
// PIC_2

// function exec() {
//     let a = 23;

//     function creator() {
//         let count = 0;

//         // return function() {
//         //     return ++count;
//         // }
//         // >>> EQUALS <<<
//         const temp = function() {
//             return ++count;
//         }
//         return temp;
//     }

//     const res = creator();
//     console.log('🟢', res());       // 1
//     console.log('🟢', res());       // 2
//     console.log('🟢', res());       // 3
// }

// exec();

// --------------------------------------------------
// PIC_3

// function creator (init) {
//     let count = init;

//     return function() {
//         return ++count;
//     }
// }

// const a = creator(10);
// const b = creator(200);

// console.log('🟢', a());
// console.log('🟢', a());

// console.log('🟢', b());
// console.log('🟢', b());



// ---------------------------------------------------
// TASK_1

// let email = 'vasia@mail.com';

// function render() {
//     console.log('🟢', `email: ${email}`);
// }

// email = 'petya@mail.com';

// render();

// email = 'dima@mail.com';


// ---------------------------------------------------
// TASK_2

// function createLogger() {
//     let path = '1.log';

//     return function() {
//         console.log('🟢', `log path: ${path}`);
//     }
// }

// let path = '2.log';

// let logger = createLogger();

// logger();



// ---------------------------------------------------
// TASK_3

// function Counter() {
//     // this = {};           // неявно

//     let count = 0;

//     this.count = 10;

//     this.up = function() {
//         this.count = 15;
//         return ++count;
//     }

//     this.down = function() {
//         return --count;
//     }

//     // return this;         // неявно
// }

// let counter = new Counter();

// console.log('🟢', counter.up());
// console.log('🟢', counter.up());
// console.log('🟢', counter.down());

// console.log('🟢', counter);




// ---------------------------------------------------
// TASK_4

// let name = 'Vasia';

// {
//     let role = 'admin';

//     function render() {
//         console.log('🟢', `name: ${name} role ${role}`);
//     }

//     render();
// }

// render();



// ---------------------------------------------------
// TASK_5


// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const sum = a => b => a + b;


// let calc1 = sum(10);
// console.log('🟢', calc1(2));
// console.log('🟢', calc1(5));

// let calc2 = sum(200);
// console.log('🟢', calc2(2));
// console.log('🟢', calc2(5));

// console.log('🟢', sum(3)(5));


// const creator = a => (b, c) => d => a * ( b + c ) / d;
// const func = creator(2)(4, 6);
// console.log('🟢', func(4));
// console.log('🟢', func(10));



// ---------------------------------------------------
// TASK_6

// const arr = [3, 5, 4, 8, 2, 9];

// // const filteredArr = arr.filter(v => v % 2 === 0);
// // console.log('🟢', filteredArr);

// // console.log('🟢', arr.filter(v => v >= 3 && v <= 7));



// // function between(from, to) {
// //     return function(v) {
// //         return v >= from && v <= to;
// //     }
// // }

// const between = (from, to) => v => v >= from && v <= to;


// console.log('🟢', arr.filter(between(3, 7)));
// console.log('🟢', arr.filter(between(0, 4)));



// ---------------------------------------------------
// TASK_7

// const users = [
//     { id: 101, name: 'vasia', age: 23 },
//     { id: 107, name: 'petya', age: 31 },
//     { id: 102, name: 'dima', age: 21 },
//     { id: 105, name: 'kolya', age: 20 },
// ];

// users.sort((a, b) => b.age - a.age);



// function by(field) {
//     return function(a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }

// const by = field => (a, b) => a[field] > b[field] ? 1 : -1;

// users.sort(by('age'));
// console.log('🟢', users);


// function by(field, dir = 'asc') {
//     return function(a, b) {
//         if (a[field] === b[field])
//             return 0;

//         if (dir === 'asc')
//             return a[field] > b[field] ? 1 : -1;
//         else
//             return a[field] > b[field] ? -1 : 1;
//     }
// }

// console.log('🟢', users.sort(by('age')));
// console.log('🟢', users.sort(by('age', 'desc')));
// console.log('🟢', users.sort(by('name')));
// console.log('🟢', users.sort(by('name', 'desc')));



//#endregion

//#region Global object

// console.log('🟢', window);
// console.log('🟢', global);
// console.log('🟢', globalThis);

// console.log('🟢', this);


// console.log('🟢', window);

// console.log('🟢', Math);
// console.log('🟢', window.Math);
// console.log('🟢', globalThis.Math);


// --- GLE

// var a = 'vasia';
// let b = 'petya';

// console.log('🟢', window);



// var a = 34;
// let b = 45;

// console.log('🟢', window.a);
// console.log('🟢', window.b);



// var a = 10;
// window.b = 20;

// console.log('🟢', a);
// console.log('🟢', b);



// var a = 10;
// window.b = 200;

// delete window.a;        // ERROR
// delete window.b;        // :-))


// console.log('🟢', window);
// var setTimeout = 'ooops';       // !!!!!
// let setInterval = 'OKOKOK';
// console.log('🟢', window);

//#endregion

//#region Function as a Object


// window.a(10);

// function a(val) {
//     console.log('🟢', val);
// }

// console.log('🟢', window);

// console.dir(a);
// a.id = 101;
// console.dir(a);
// a.info = function() {
//     console.log('🟢', 'info :-)');
// }
// console.dir(a);


// function run() {
//     console.log('🟢', 'hello');
//     run.count++;
// }
// run.count = 0;

// run();
// run();
// run();

// console.dir(run);




// ---------------- NFE (Named Function Expression) ---------------

// let f = function test() {
//     //
//     test();
// };

// f();



// ---------------- new Function() ----------------

// const a = new Function('a', 'b', 'return a + b;');
// console.dir(a);
// console.log('🟢', a(3, 4));


// eval('console.log("test string");');


//#endregion

//#region setTimeout() setInterval()
// const timer = setTimeout(() => console.log('🟢', 'test'), 3000);
// console.log('🟢', timer);


// function render(message) {
//     console.log('🟢', message);
// }

// setTimeout(render, 2000, 'Vasia')


// function f() {
//     console.log('🟢', this);
// }
// setTimeout(f, 1000);



// setTimeout(() => console.log('🟢', 'test_1'), 0);
// setTimeout(() => console.log('🟢', 'test_2'), 0);
// setTimeout(() => console.log('🟢', 'test_3'), 0);
// setTimeout(() => console.log('🟢', 'test_4'), 0);
// setTimeout(() => console.log('🟢', 'test_5'), 0);
// setTimeout(() => console.log('🟢', 'test_6'), 0);

// console.log('🟢', 'xxx_1');
// console.log('🟢', 'xxx_2');
// console.log('🟢', 'xxx_3');
// console.log('🟢', 'xxx_4');
// console.log('🟢', 'xxx_5');




// const timerNum = setTimeout(() => console.log('🟢', 'test'), 3000);
// setTimeout(() => clearTimeout(timerNum), 1000);



// let count = 0;
// const timer = setInterval(() => console.log('🟢', ++count), 1000);
// setTimeout(() => clearInterval(timer), 5000);




// let delay = 3000;

// let temerId = setTimeout((req) => {
//     // fetch to server
//     //
//     // if (error)
//     //     delay += 500;

//     console.log('🟢', 'success');

//     setTimeout((req) => {
        
//     }, delay);

// }, delay);

//#endregion

//#region decorators + call + apply + spread operator

// ---- Самый простой декоратор

// function calc(a) {
//     console.log('🟢', `calc() with ${a}`);

//     return a * 2;
// }

// function cacheDecorator(fn) {
//     const cache = new Map();

//     return function(val) {
//         if (cache.has(val)) {
//             console.log('🟢', `from cahche ${cache.get(val)}`);
//             return cache.get(val);
//         }

//         let result = fn(val);
//         cache.set(val, result);

//         return result;
//     }
// }

// calc(5);
// const cachedFunction = cacheDecorator(calc);
// cachedFunction(5);
// cachedFunction(6);
// cachedFunction(7);
// cachedFunction(5);
// cachedFunction(5);




// ---- Добавим возможность декорировать методы объекта

// const user = {
//     // factor: 2,
//     getFactor() {
//         return 2;
//     },
//     calc(val) {
//         console.log('🟢', `calc() with ${val}`);
//         return val * this.getFactor();
//     }
// };

// function cacheDecorator(fn) {
//     const cache = new Map();

//     return function(val) {
//         if (cache.has(val)) {
//             console.log('🟢', `from cahche ${cache.get(val)}`);
//             return cache.get(val);
//         }

//         // let result = fn(val);        // ERROR (this === undefined)

//         // let arrow = () => fn(val);   // ERROR (this === undefined)
//         // let result = arrow();

//         let result = fn.call(this, val);    // :-)))


//         cache.set(val, result);

//         return result;
//     };
// }

// // console.log('🟢', user.calc(5));

// user.calc = cacheDecorator(user.calc);
// console.log('🟢', user.calc(3));
// console.log('🟢', user.calc(4));
// console.log('🟢', user.calc(3));




// function f() {
//     console.log('🟢', this.val);
// }

// const user = {
//     val: 10,
// }

// const a = {val: 101, email: 'vasia@mail.com'};
// const b = {val: 202};

// // f();            // cannot read properties of undefined

// new f();            // undefined

// user.f = f;
// user.f();           // 10

// f.call(user);       // 10
// f.call(a);          // 101
// f.call(b);          // 202




// ----- Добавим возможность декорировать функции с любым количеством параметров

// const user = {
//     // factor: 2,
//     getFactor() {
//         return 2;
//     },
//     calc(a, b) {
//         console.log('🟢', `calc() with ${a}, ${b}`);
//         return a * this.getFactor() + b;
//     }
// };

// function cacheDecorator(fn, hashFn) {
//     const cache = new Map();

//     return function() {
//         let key = hashFn(arguments);
//         console.log('🟢', `key = ${key}`);

//         if (cache.has(key)) {
//             console.log('🟢', `from cahche ${cache.get(key)}`);
//             return cache.get(key);
//         }

//         // let result = fn.apply(this, arguments);

//         let result = fn.call(this, ...arguments);

//         cache.set(key, result);

//         return result;
//     };
// }

// user.calc = cacheDecorator(user.calc, (args) => {
//     let str = '';
//     for (let a of args)
//         str += a;

//     return str;
// });

// user.calc = cacheDecorator(user.calc, args => [].join.call(args, ''));


// console.log('🟢', user.calc(3, 1));
// console.log('🟢', user.calc(4, 1));
// console.log('🟢', user.calc(3, 1));



//#endregion

//#region logDecorator

// function logDecorator(fn) {
//     function wrapper(...args) {
//         wrapper.logs.push(args);

//         return fn.apply(this, args);
//     }

//     wrapper.logs = [];

//     return wrapper;
// }

// function exec(a, b) {
//     return a + b;
// }

// exec = logDecorator(exec);

// console.log('🟢', exec(1, 3, 7, 12));
// console.log('🟢', exec(6, 7));
// console.log('🟢', exec(0, 8));

// console.dir(exec);


//#endregion

//#region throttleDecorator

// function throttleDecorator(fn, interval) {
//     let lastTime;

//     return function() {
//         let lastExecPeriod = Date.now() - lastTime;

//         if (!lastTime || lastExecPeriod >= interval) {
//             fn.apply(this, arguments);
//             lastTime = Date.now();
//         }
//     }
// }

// // let i = 0;
// // function f() {
// //     console.log('🟢', ++i);
// // }

// // f = throttleDecorator(f, 100);

// // for(let i = 0; i < 100e6; ++i)
// //     f();



// let i = 0;
// function f() {
//     console.log('🟢', ++i);
// }

// f = throttleDecorator(f, 100);

// document.addEventListener('mousemove', f);


//#endregion

//#region singletonDecorator

// function singletonDecorator(fn) {
//     let canRun = true;
//     let result;

//     return function() {
//         if (canRun) {
//             result = fn.apply(this, arguments);
//             canRun = false;
//         }

//         return result;
//     }
// }

// function f() {
//     console.log('🟢', 'f() was called');
//     return 10;
// }

// f = singletonDecorator(f);

// console.log('🟢', f());
// console.log('🟢', f());
// console.log('🟢', f());
// console.log('🟢', f());
// console.log('🟢', f());

//#endregion

//#region debounceDecorator

// function debounceDecorator(fn, interval) {
//     let timer;

//     return function() {
//         clearTimeout(timer);
//         let args = arguments;
//         let self = this;

//         timer = setTimeout(function() {
//             fn.apply(self, args);
//         }, interval);
//     }
// }

// let i = 0;
// function f() {
//     console.log('🟢', ++i);
// }

// f = debounceDecorator(f, 500);

// document.addEventListener('mousemove', f);

//#endregion

//#region bind()

// const user = {
//     email: 'vasia@mail.com',
//     render() {
//         console.log('🟢', this);
//         console.log('🟢', this.email);
//     }
// };

// // user.render();

// // setTimeout(function() {
// //     user.render();
// // }, 1000);

// // setTimeout(() => user.render(), 1500);

// // setTimeout(user.render, 2000);

// // let f = user.render;
// // // f();                    // ERROR
// // f.call(user);

// // f.apply(user);

// // f = f.bind(user);
// // f();

// setTimeout(user.render.bind(user), 1000);

//#endregion

//#region arraow functions

// const user = {
//     email: 'vasia@mail.com',
//     grades: [8, 9, 10, 9, 12],
//     render1() {
//         this.grades.forEach(function(g) {
//             console.log('🟢', `email: ${user.email}: ${g}`);            // :-(
//         });
//     },
//     render2() {
//         this.grades.forEach(function(g) {
//             console.log('🟢', `email: ${this.email}: ${g}`);            // :-)
//         }.bind(this));
//     },
//     render3() {
//         this.grades.forEach(function(g) {
//             console.log('🟢', `email: ${this.email}: ${g}`);            // :-)
//         }, this);
//     }
// };
// user.render1();
// user.render2();
// user.render3();




// const user = {
//     email: 'vasia@mail.com',
//     grades: [8, 9, 10, 9, 12],
//     render() {
//         this.grades.forEach(g => {
//             console.log('🟢', `email: ${this.email}: ${g}`);
//         });
//     }
// };
// user.render();



// const user = {
//     id: 202,
// }

// function delayDecorator(fn, delay) {
//     return function() {
//         setTimeout(() => fn.call(this, ...arguments), delay)
//     };

//     // return function() {
//     //     setTimeout(function() { 
//     //         fn.call(this, ...arguments);
//     //     }, delay)
//     // };
// }


// function f(a, b, c) {
//     console.log('🟢', this);
//     console.log('🟢', a, b, c);
// }

// const df = delayDecorator(f, 2000);

// df('vasia', 34, {});
// df.call(user);


//#endregion


