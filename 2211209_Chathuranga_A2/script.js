var labelusername = document.getElementById("label-username");
var labelpassword = document.getElementById("label-password");
var txtUsername = document.getElementById("username");
var txtpassword = document.getElementById("password");

labelusername.addEventListener("click",function(){
    labelusername.classList.add("small-text");
})

labelpassword.addEventListener("click",function(){
    labelpassword.classList.add("small-text");
})

txtUsername.addEventListener("click",function(){
    labelusername.classList.add("small-text");
})

txtpassword.addEventListener("click",function(){
    labelpassword.classList.add("small-text");
})

txtUsername.addEventListener("blur",function(){
    if ( txtUsername.value == '')  {
    labelusername.classList.remove("small-text");
    }
})

txtpassword.addEventListener("blur",function(){
    if (txtpassword.value == ''){
        labelpassword.classList.remove("small-text");
    }
})