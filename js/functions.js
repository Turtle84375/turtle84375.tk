function loginLogoutText() {
  var x = document.cookie;
  if (x.includes("authorized?true")) {
    document.getElementById("loginDynamic").href="dashboard";
    document.getElementById("loginDynamic").innerHTML = "Dashboard";
  }
}
