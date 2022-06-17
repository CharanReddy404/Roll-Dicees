
var arr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];

function start(){
    var randomNumber1 = Math.floor((Math.random()*6));
    var randomNumber2 = Math.floor((Math.random()*6));

    document.getElementsByClassName("img1")[0].setAttribute("src", arr[randomNumber1]);
    document.getElementsByClassName("img2")[0].setAttribute("src", arr[randomNumber2]);

    if(randomNumber1>randomNumber2){
        document.getElementsByTagName("h1")[0].innerText="Player 1 Wins!";
    }else if(randomNumber1<randomNumber2){
        document.getElementsByTagName("h1")[0].innerText="Player 2 Wins!";
    }else{
        document.getElementsByTagName("h1")[0].innerText="Draw!";
    }
}
