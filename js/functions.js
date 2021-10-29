function loginLogoutText() {
  var x = document.cookie;
  if (x.includes("authorized?true")) {
    setProperty("loginDynamic", "text", "Dashboard");
  }
}
