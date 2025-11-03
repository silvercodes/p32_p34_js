
//#region callbacks

// function load(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// load('script_1.js');

// render('Hello Vasia');




// ==== WITH CALLBACKS

// function load(src, onScriptLoadedCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onScriptLoadedCallback();
//     document.head.append(script);
// }

// load('script_1.js', () => {
//     render('Hello Vasia');
// });

// console.log('🟢', 1);
// console.log('🟢', 2);
// console.log('🟢', 3);


// ==== WITH CALLBACKS 

// function load(src, onScriptLoadedCallback, onScriptErrorCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onScriptLoadedCallback();
//     script.onerror = () => onScriptErrorCallback();
//     document.head.append(script);
// }

// load('script_1.js', () => {
//     console.log('🟢', 'script_1 was loaded');
//     load('script_2.js', () => {
//         console.log('🟢', 'script_2 was loaded');
//         render('Hello Vasia');
//         log('log info');
//     }, () => console.log('🟢', 'error_2'));
// }, () => console.log('🟢', 'error_1'));

// console.log('🟢', 1);
// console.log('🟢', 2);
// console.log('🟢', 3);

//#endregion


//#region Promise

// console.log('🟢', Promise);

// const p = new Promise((resolve, reject) => {
//     //
//     //
//     //
//     resolve(value);
//     // OR
//     reject(error);
// });

// state                pending ->          fulfilled    OR     rejected

// result               undefined ->        value               error




// const p = new Promise((res, rej) => {
//     //
//     rej(new Error('error'));
//     setTimeout(() => res(101), 2000);
// });
// console.dir(p);
// console.log('🟢', 'test');





// new Promise((res, rej) => {
//     setTimeout(() => res(101), 1000);
// }).then(res => {
//         console.log('🟢', `RESULT: ${res}`);
//     }, err => {
//         console.log('🟢', `ERROR: ${err}`);
//     })
//     .catch(err => {})
//     .finally(() => {});






// function load(src) {
//     return new Promise((res, rej) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = () => res(script);
//         script.onerror = () => rej(new Error('Script loading failed...'));
//         document.head.append(script);
//     });
// }

// load('script_1.js')
//     .then(
//         script => {
//             return 150;
//         }, 
//         err => {}
//     ).then(
//         val => console.log('🟢', val),
//         err => {}
//     );

//#endregion


//#region Practice

// fetch('data.json')
//     .then(response => response.json())
//     .then(user => console.log('🟢', user));

// console.log('🟢', 'test');


//#endregion


//#region async / await

// async function func() {
//     return 101;
// }

// await func();

// async function func() {
//     return new Promise((res, rej) => {
//         setTimeout(() => res(101), 1000);
//     });
// }

// func()
//     .then(val => console.log('🟢', val));


function mockFetch(url) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                json: () => Promise.resolve({
                    id: 101,
                    email: 'vasia@mail.com',
                    age: 23,
                })
            })
        }, 1000);
    });
}

mockFetch('http://data.com')
    .then(obj => obj.json())
    .then(val => console.log('🟢', val));

    





//#endregion
 