'use strict'

// function renderInfo() {
//     console.log('🟢', 'renderInfo');
// }

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// }

// user.render = renderInfo;
// user.render();

// user.info = function() {
//     console.log('🟢', 'INFO');
// };

// console.log('🟢', user);






// const user = {
//     id: 101,
//     email: 'vasia@mail.com',

//     func: () => {console.log('🟢', 'Arrow function');},

//     render: function() {
//         console.log('🟢', 'render');
//     },

//     info() {
//         console.log('🟢', 'info');
//     }
// };

// user.func();
// user.render();
// user.info();







// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render: function() {
//         // console.log('🟢', email);            // ERROR

//         // console.log('🟢', this.email);

//         console.log('🟢', user.email);          // :-|

//         // console.log('🟢', user === this);
//     }
// };

// user.render();

// const client = user;
// client.render();







// function renderInfo() {
//     console.log('🟢', this.email);
// }

// // renderInfo();   // ERROR

// const a = {
//     email: 'vasia@mail.com',
// };

// const b = {
//     email: 'petya@mail.com',
// };

// a.render = renderInfo;
// b.render = renderInfo;

// a.render();
// b.render();






const user = {
    id: 101,
    render() {
        // this === user

        const handler1 = () => console.log('🟢', this.id);
        
        handler1();

        const handler2 = function() {
            console.log('🟢', this.id);
        };

        handler2();
    }
};

user.render();


