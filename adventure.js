var title = document.getElementById("title");
var image = document.getElementById("image");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var inventoryItem = document.getElementById("inventoryItem");

var fuelCanister = false;
var shovel = false;

function startGame(){
	title.innerHTML = "Escape from the Murderer";
	inventoryItem.style.display ="none"
	description.innerHTML = "You have landed in a forest deep in the night with a serial killer. You need to escape and just.. don't let him kill you.";
	button1.innerHTML = "CREDITS"
	button1.setAttribute("onclick", "credits()");
	button2.innerHTML = "START GAME"
	button2.setAttribute("onclick", "beginning()");
	button3.innerHTML = "HOW TO PLAY"
	button3.setAttribute("onclick", "tutorial()");
}

function credits(){
	image.src ="credits.jpg";
}

function tutorial(){
	image.src ="tutorial.jpg";
}

function beginning(){
	image.src ="beginning.jpg";
	description.innerHTML = "[FOREST] There is a small house on the left and you can follow the path on the right.";
    button1.innerHTML = "EXPLORE THE HOUSE";
    button1.setAttribute("onclick", "house()");
    button2.innerHTML = "FOLLOW THE PATH";
    button2.setAttribute("onclick", "path();");
    button3.style.display = "none";
}

function house(){
	image.src ="house.jpg";
	description.innerHTML = "[NEAR THE HOUSE] Do you want to get in the house or go back?";
    button1.innerHTML = "GET IN THE HOUSE";
    button1.setAttribute("onclick", "house1()");
    button2.innerHTML = "GO BACK";
    button2.setAttribute("onclick", "beginning()");
    button3.style.display = "none";
}

function house1(){
	image.src ="dead3.jpg";
	description.innerHTML = "THE MURDERER FOUND YOU...YOU ARE DEAD!";
	button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

function path(){
	image.src ="path.jpg";
	description.innerHTML = "[FOREST] You have 3 options now, which one do you choose...";
	button1.innerHTML = "GO LEFT";
    button1.setAttribute("onclick", "camping()");
    button2.innerHTML = "GO RIGHT";
    button2.setAttribute("onclick", "house3()");
    button3.innerHTML = "GO BACK";
    button3.setAttribute("onclick", "beginning()");
    button3.style.display = "inline-block";
}

function camping(){
	image.src ="camping.jpg"
	description.innerHTML ="[CAMPING] You arrived at a camping. What do you want to do?"
	button1.innerHTML = "HIDE IN THE TENT";
    button1.setAttribute("onclick", "dead1()");
    button2.innerHTML = "GO FURTHER";
    button2.setAttribute("onclick", "forest2()");
    button3.innerHTML = "GO BACK";
    button3.setAttribute("onclick", "path()");
}

function dead1(){
	image.src ="dead2.jpg"
	description.innerHTML ="THAT WAS NOT THE BEST IDEA..HE FOUND YOU AND YES... YOU ARE DEAD!";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}

function house3(){
	image.src ="house4.jpg"
	description.innerHTML ="[IN FRONT OF THE HOUSE]You found another house, do you want to explore it?";
	button1.innerHTML = "EXPLORE THE HOUSE";
    button1.setAttribute("onclick", "exploring()");
    button2.innerHTML = "GO BACK";
    button2.setAttribute("onclick", "path()");
    button3.style.display = "none";
}

function exploring(){
	image.src ="fuelhouse.jpg"
	description.innerHTML ="[IN THE HOUSE]Look around, maybe you will find something usefull..."
	button1.innerHTML = "LOOK AROUND";
    button1.setAttribute("onclick", "fuelCanister()");
    button2.innerHTML = "LEAVE THE HOUSE";
    button2.setAttribute("onclick", "house3()");
    button3.style.display = "none";
}

function forest2(){
	image.src ="forest2.jpg"
	description.innerHTML ="[NEAR THE GRAVEYARD] Do you want to go to the graveyard, move back or go further?"
	button1.innerHTML = "GO TO THE GRAVEYARD";
    button1.setAttribute("onclick", "graveyard()");
    button2.innerHTML = "MOVE FURTHER";
    button2.setAttribute("onclick", "car()");
    button3.innerHTML = "GO BACK";
    button3.setAttribute("onclick", "camping()");
}

function graveyard(){
	image.src ="graveyard.jpg"
	description.innerHTML ="[GRAVEYARD] It's creapy here... What do you want to do?"
	button1.innerHTML = "LOOK AROUND";
    button1.setAttribute("onclick", "shovel()");
    button2.innerHTML = "GO BACK";
    button2.setAttribute("onclick", "hello()");
    button3.style.display = "none";
}

function hello(){
	image.src ="hellothere.jpg"
	description.innerHTML ="HE FOUND YOU! WHAT NOW???"
	button1.innerHTML = "TRY TO RUN";
    button1.setAttribute("onclick", "killed()");
    button2.innerHTML = "TRY TO HIT HIM WITH THE SHOVEL";
    button2.setAttribute("onclick", "shovel()");
    button3.style.display = "none";
}

function killed(){
	image.src ="killed.jpg"
	description.innerHTML ="HE CATCHED YOU..I AM SORRY BUT.. YOU'RE DEAD!"
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
}

function car(){
	image.src ="car.jpg"
	description.innerHTML ="[CAR] You found a car. Maybe it's your way out of here!"
	button1.innerHTML = "GET IN THE CAR";
    button1.setAttribute("onclick", "car2()");
    button2.innerHTML = "GO BACK";
    button2.setAttribute("onclick", "forest2()");
    button3.style.display = "none";
}

function car2(){
	image.src ="insidecar.jpg"
	description.innerHTML ="[INSIDE-CAR] Looks like the car isn't damaged, but it's out of fuel.. You need to find a fuel canister to start the car and escape!!"
	button1.innerHTML = "GET OUT OF THE CAR";
    button1.setAttribute("onclick", "car()");
    button2.innerHTML = "REFUEL THE CAR";
    button2.setAttribute("onclick", "refuel()");
    button3.style.display = "none";
}

startGame();