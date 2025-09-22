'use strict'

// #region Function declaration
// render();

// function render() {
//     console.log('🟢', 'test string');
// }

// console.log('🟢', render());



// let email = 'vasia@mail.com';
// function render() {
//     let email = 'dima@mail.com';
//     email = 'petya@mail.com';
//     console.log('🟢', email);
// }
// render();
// console.log('🟢', email);



// function render1(message) {
//     console.log('🟢', message);
// }

// function render2(message = 'no_message') {
//     console.log('🟢', message);
// }

// render1('vasia');
// render1();
// render2();
// render2('petya');
// console.log('🟢', render1());



// function getRandom() {
//     return 4;
// }

// function render(val = getRandom()) {
//     console.log('🟢', val);
// }

// render(12);
// render();




// function render(message) {
//     // if (message === undefined)
//     //     console.log('🟢', 'error');
//     // else
//     //     console.log('🟢', message);

//     message ??= 'error';
//     console.log('🟢', message);

// }

// render();
// #region 


//#region Function expression

// render();           // ERROR
// const render = function() {
//     console.log('🟢', 'test string');
// };
// render();


// f();
// function f() {
//     console.log('🟢', 'f');
// }
// const render = f;
// render();




// function validate(val, success, error) {
//     if (val < 0)
//         error();
//     else
//         success();
// }

// // function successHandler() {
// //     console.log('🟢', 'SUCCESS');
// // }
// // function errorHandler() {
// //     console.log('🟢', 'ERROR');
// // }
// // validate(12, successHandler, errorHandler);

// validate(
//     -4,
//     function() {console.log('🟢', 'OK');},
//     function() {console.log('🟢', 'ERROR');}
// );




// let f;
// {
//     f = function() {
//         console.log('🟢', 'f');
//     }
// }
// f();


//#endregion


//#region Arrow function

// let f = () => console.log('🟢', 'test');
// f();

// let g = (a, b) => {
//     //
//     //
//     return a + b;
// }
// console.log('🟢', g(3, 4));



// function validate(val, success, error) {
//     if (val < 0)
//         error();
//     else
//         success();
// }

// validate(
//     -4,
//     () => console.log('🟢', 'ok'),
//     () => console.log('🟢', 'error')
// );

//#endregion



