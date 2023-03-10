let btn = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submitPass = document.getElementById("submit-password");


btn.addEventListener("click", function(){
    if (username.value == "") {
        username.style.border="2px solid red";
        document.getElementById("usernameSpan").style.opacity="1";
        document.getElementById("firstRed").style.opacity="1";
    }
    else{
        username.style.border="2px solid green";
        document.getElementById("firstGreen").style.opacity="1";
        document.getElementById("firstRed").style.opacity="0";
        document.getElementById("usernameSpan").style.opacity="0";

    }
    if(email.value==""){
        email.style.border="2px solid red";
        document.getElementById("emailSpan").style.opacity="1";
        document.getElementById("secondRed").style.opacity="1";
        
    }
    else{
        email.style.border="2px solid green";
        document.getElementById("secondGreen").style.opacity="1";
        document.getElementById("secondRed").style.opacity="0";
        document.getElementById("emailSpan").style.opacity="0";
    }
    if(password.value==""){
        password.style.border="2px solid red";
        document.getElementById("passSpan").style.opacity="1";
        document.getElementById("thirdRed").style.opacity="1";
    }
    else{
        password.style.border="2px solid green";
        document.getElementById("thirdGreen").style.opacity="1";
        document.getElementById("thirdRed").style.opacity="0";
        document.getElementById("passSpan").style.opacity="0";


    }
    if(submitPass.value==""){
        console.log("adada");
        submitPass.style.border="2px solid red";
        document.getElementById("submitSpan").style.opacity="1";
        document.getElementById("fourthRed").style.opacity="1";
    }
    else{
        submitPass.style.border="2px solid green";
        document.getElementById("fourthGreen").style.opacity="1";
        document.getElementById("fourthRed").style.opacity="0";
        document.getElementById("submitSpan").style.opacity="0";



    }
    
})