function checkIfLoggedIn() {
  var x = document.cookie;
  if (!x.includes("authorized=true")) {
    window.location.replace("https://turtle84375.tk/login");
  return;
};

window.onload = checkIfLoggedIn();
