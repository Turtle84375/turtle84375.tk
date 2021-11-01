function loginLogoutText() {
  var x = document.cookie;
  if (x.includes("authorized?true")) {
    document.getElementById("loginDynamic").href="dashboard";
    document.getElementById("loginDynamic").innerHTML = "Dashboard";
  }
}

function devView() {
  var pageHtml = document.documentElement.outerHTML;
  localStorage.devViewStorage = pageHtml;
  window.location.replace("https://turtle84375.tk/dev");
}
