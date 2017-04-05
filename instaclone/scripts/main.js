$().ready(() => {
  const signupContainer = $('.signup-container');
  const loginContainer = $('.login-container');
  $('.show-login').on('click', showLogin);
  $('.show-signup').on('click', showSignup);
  
  function showLogin() {
    $(signupContainer).hide();
    $(loginContainer).show();
    console.log("yoyo");
  }

  function showSignup() {
    $(signupContainer).show();
    $(loginContainer).hide();
    console.log("hello");
  }  

});

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