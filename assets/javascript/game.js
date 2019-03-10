var word = ["planet","sun","star","moon","mars","venus","mercury","earth","little dipper","big dipper","aries","taurus","orion","libra","capricorn"]
var computerChoice = Math.floor(Math.random() * word.length);
var answerArray=[]
var s;
var lives= 5;

     function startUp(){
     for (var i = 0; i < word.length; i++);
     {
         answerArray[i]= "_ ";
     }
     var s = answerArray.join(" ");
     document.getElementById("answer").innerHTML = s;

     function userGuess() {
        document.onkeyup = function (event){
        var keyPressed = event.key.toLowerCase();
        keyPressed = document.getElementById("keyPressed").value;
        if (keyPressed.length > 0)
        { 
            for(var i = 0; i < word.length; i++) 
            {
                if (word[i]===letter) {
             answerArray[i] = letter;
            }
        }
        lives--;
        document.getElementById("lives").innerHTML="Lives Remaining: " + lives;
        document.getElementById("answer").innerHTML =answerArray.join(" ");
    }
    }
}
     }