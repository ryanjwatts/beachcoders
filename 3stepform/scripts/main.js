// $().ready(() => {
  const cone = $('.one-container');
  const ctwo = $('.two-container');
  const cthree = $('.three-container'); 
  
  function nextDiv(a) {
    console.log(a);
    // if (a === 'two') {
    cone.toggle();
    ctwo.toggle();
    // }
    // else if (a === 'three') {
    //   ctwo.toggle();
    //   cthree.toggle();
    // }
    // else if (a === 'one') {
    //   cthree.toggle();
    //   cone.toggle();
    // }
  }
// });
    
    // console.log(a);


// $().ready(() => {
//   const signupContainer = $('.signup-container');
//   const loginContainer = $('.login-container');
//   $(loginContainer).hide();
//   $('.show-login').on('click', showLogin);
//   $('.show-signup').on('click', showSignup);
  
//   function showLogin() {
//     $(signupContainer).hide(1);
//     $(loginContainer).show(1000);
//     console.log("yoyo");
//   }

//   function showSignup() {
//     $(signupContainer).show(1000);
//     $(loginContainer).hide(1);
//     console.log("hello");
//   }  

// });

// $(document).ready(function () {
//   $(".show-login").click(function () {
//     $("signup-container").hide();
//     $("login-container").show();
//   })
//   $(".show-signup").click(function () {
//     $("signup-container").show();
//     $("login-container").hide();
//   })
// });

// $().ready(() => {
//   const signupContainer = $('.signup-container');
//   const loginContainer = $('.login-container');
//   const signupSwap = $('.signup-swap');
//   const loginSwap = $('.login-swap');
//   $('.swap-button').on('click', toggleForms);

//   function toggleForms() {
//     signupContainer.toggle();
//     loginContainer.toggle();
//     signupSwap.toggle();
//     loginSwap.toggle();
//   }
// });