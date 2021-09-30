function checkIfBanned() {
  var x = document.cookie;
  if (x.includes("banned=true")) {
    window.location.replace("https://turtle84375.tk/banned");
  return;
};
 
window.onload = checkIfBanned();
