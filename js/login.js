function validate () {
var username = document.getElementById("username").value;
var password = CryptoJS.SHA512(document.getElementById("password").value);
if ( username.toLowerCase() == "username" && password == "e8603172175d138e1724d75c91f788738fcbcc74fc98ee68837075bbb0aaf0f6db567cca1b61ec57ad646d79e39b3b2ed452b8a048f22b265fb74b8a244a828c" ) { /*Will make more secure later*/
  document.cookie = "session=authorized?true, admin?true, banned?false";
  document.cookie = "id=" + username;
  window.location = "https://turtle84375.tk/dashboard";
  return false;
  } else {
    if ( username == "" || password == ""){
    document.getElementById("errorText").innerHTML = "You must type in a username and password to log in!";
    } else {
      document.getElementById("errorText").innerHTML = "Incorrect username or password, please retry.";
      return false;
      }
    }
  }
