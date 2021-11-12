let check = JSON.parse(localStorage.getItem('check_Login'));
// console.log(check[0].status);

if(check.length > 0){
    let loginBtn = document.getElementById("login-btn");
    let userAccount = document.getElementById("userAcc");
    loginBtn.setAttribute("class", "dontDisplay");
    userAccount.setAttribute("class", "afterLogin");
}