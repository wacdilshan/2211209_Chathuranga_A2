
var objPeople = [
    {
        username:"sadu",
        password:"1234"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
     
    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].
            password) {
                console.log(username+"is logged in!!!")
                window.location.href = 'http://127.0.0.1:5500/home-page.html';
                return
            }
    }
}console.log("incorect username or password")