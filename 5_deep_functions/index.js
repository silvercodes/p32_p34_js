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

function createLogger() {
    let path = '1.log';

    return function() {
        console.log('🟢', `log path: ${path}`);
    }
}

let path = '2.log';

let logger = createLogger();

logger();








//#endregion

