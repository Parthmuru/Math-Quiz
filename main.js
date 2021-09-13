function send(){
    var add_user1 = document.getElementById("player1").value;
    var add_user2 = document.getElementById("player2").value;
    localStorage.setItem("player1", add_user1);
    localStorage.setItem("player2", add_user2);
    window.location = "game_login.html";
}