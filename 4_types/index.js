
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




const user = {
    email: 'vasia@mail.com',
};

const id = Symbol('id');
user[id] = 101;
// console.log('🟢', user);

// console.log('🟢', user[id]);


for (let key in user)
    console.log('🟢', key);







