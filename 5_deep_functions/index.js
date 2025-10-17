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