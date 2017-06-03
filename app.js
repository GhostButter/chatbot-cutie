function chat (){
	var textBoxValue = document.getElementById('hello').value;
	if (textBoxValue == "hello") {
		document.getElementById("hellro").innerHTML = "oh shoot what up it's dat boi\n"
	}
	if (textBoxValue == "how are you") {
		document.getElementById("hellro").innerHTML = "I am doing lit fam\n"
	}
	if (textBoxValue == "what do you think about figit spiners") {
		document.getElementById("hellro").innerHTML = "they're canser\n"
	}
	if (textBoxValue == "dogs or cats") {
		document.getElementById("hellro").innerHTML = "Dogs\n"
	}
	if (textBoxValue == "Do a inprestion of tumber") {
		document.getElementById("hellro").innerHTML = "TRIGGERED\n"
	}
	if (textBoxValue == "who do you main in TF2") {
		document.getElementById("hellro").innerHTML = "Speeeeeee http://i0.kym-cdn.com/photos/images/newsfeed/000/039/931/600px-Gentlemen.jpg\n"
	}
	if (textBoxValue == "do you like anime") {
		document.getElementById("hellro").innerHTML = "anime was a mistake\n"
	}
	if (textBoxValue == "who do you main in overwatch") {
		document.getElementById("hellro").innerHTML = "TRIGGERED\n"
		var audio = document.getElementById("never");
		audio.play();
	}
	document.getElementById('poop').innerHTML += Date() + "\n";
	document.getElementById('poop').innerHTML += "User: " + textBoxValue + "\n";
	document.getElementById('poop').innerHTML += "Memebot" + document.getElementById('hellro').innerHTML + "\n"
}	