
 


function drink () {
    
    var favorite = prompt("What's your favorite drink?");
    var answer;

    if (favorite == "gin") {
        answer = "One of us! One of us!"
    } else {
        answer = "That's fine too, I guess."
    }

    document.write(answer);
}

function name () {

    var name = prompt("What's your name?");

    document.write("Hello " + name + "! How are you today?");

}

function age () { 
var age = prompt("Are you over 21?");

if (20 <= age && age <= 150)  {
    document.write("Stay a while and listen!");

} else if (0 <= age && age<= 20) {
    document.write("This conversation is not for such tender ears.");

} else {
    document.write("Please enter a real age.");

   

}
console.log(age);
}


