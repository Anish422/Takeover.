function signIn(){
    var T = document.getElementById("signIn"),
        displayValue = "";
        if (T.style.display == "")
        T.style.display = "none";
        T.style.display = displayValue;
        document.getElementById("password").type= "password";
}

function submitSignIn () {
    document.getElementById("username").innerHTML = document.getElementById("user_name").value;
    var T = document.getElementById("signIn"),
        displayValue = "none";
        if (T.style.display == "none")
        T.style.display = "";
        T.style.display = displayValue;

}