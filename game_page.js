player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1 + " : ";
document.getElementById("player2").innerHTML = player2 + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2;

function send(){  
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById('number2').value;
    actual_answer = parseInt(num1) * parseInt(num2);

    question = "<h4 id='question_display'> Q." + num1 + " x " +  num2 + "<h4>";
    input_box = "<br> Answer: <input type='number' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

answer_turn = "player2";
question_turn = "player1";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }

    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }

    if(answer_turn == "player2"){
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }

    else{
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }
    document.getElementById("output").innerHTML = "";
}