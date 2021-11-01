function loginLogoutText() {
  var x = document.cookie;
  if (x.includes("authorized?true")) {
    document.getElementById("loginDynamic").href="dashboard";
    document.getElementById("loginDynamic").innerHTML = "Dashboard";
  }
}

function devView() {
  var pageHtml = document.documentElement.outerHTML;
  window.location.replace("https://turtle84375.tk/dev");
  document.getElementById("dev-view-panel").innerHTML = pageHtml;
}
