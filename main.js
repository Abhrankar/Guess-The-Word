var player1 = document.getElementById("player1_name").value;
var player2 = document.getElementById("player2_name").value;
function login() {
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
  //window.location = "game_page.html";
}