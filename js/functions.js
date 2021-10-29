function loginLogoutText() {
  var loginDynamicURL;
  var x = document.cookie;
  if (x.includes("authorized?true")) {
    loginDynamicURL = "https://turtle84375.tk/dashboard";
    document.getElementById("loginDynamic").innerHTML = "Dashboard";
  } else {
    loginDynamicURL = "https://turtle84375.tk/login";
  }
}
