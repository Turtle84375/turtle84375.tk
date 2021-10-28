function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username.toLowerCase() == "turtle84375" && password == "notmyrealpass" ) { /*Will make more secure later*/
document.cookie = "session=authorized?true, admin?true, banned?false";
document.cookie = "id=Turtle84375;
window.location = "https://turtle84375.tk/dashboard";
return false;
} else if ( username.toLowerCase() == "username" && password == "1234" ) {
  document.cookie = "session=authorized?true, admin?false, banned?false";
  document.cookie = "id=" + username;
  window.location = "https://turtle84375.tk/dashboard";
  return false;
} else if ( username == "" || password == "") {
    document.getElementById("errorText").innerHTML = "You must type in a username and password to log in!";
    } else {
        document.getElementById("errorText").innerHTML = "Incorrect username or password, please retry.";
        return false;
    }
  }
