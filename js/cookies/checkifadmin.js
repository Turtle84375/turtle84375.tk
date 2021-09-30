function checkIfAdmin() {
  var x = document.cookie;
  if (!x.includes("admin=true")) {
    window.location.replace("https://turtle84375.tk/access_denied");
  return;
};
  
window.onload = checkIfAdmin();
