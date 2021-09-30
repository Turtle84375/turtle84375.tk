function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkIfLoggedIn() {
  var x = document.cookie;
  if (!x.includes("authorized=true")) {
    window.location.replace("https://turtle84375.tk/login");
  return;
};

function checkIfAdmin() {
  var x = document.cookie;
  if (!x.includes("admin=true")) {
    window.location.replace("https://turtle84375.tk/access_denied");
  return;
};
  
function checkIfBanned() {
  var x = document.cookie;
  if (x.includes("banned=true")) {
    window.location.replace("https://turtle84375.tk/banned");
  return;
};
