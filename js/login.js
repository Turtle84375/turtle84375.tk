function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "TurtleCoding84" && password == "1234" ){/*Will make more secure later*/
document.cookie = "authorized=true";
window.location = "https://turtle84375.tk/dashboard";
return false;
}
else{
  if ( username == "" || password == ""){
    alert("You must type in a username and password to log in!");
  }
  else{
  alert("Incorrect username or password, please retry.");
  return false;
}
}
}

/*
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha512.js"></script>
<script>
    var hash = CryptoJS.SHA512("Message");
</script>
*/
