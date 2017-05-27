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
	document.getElementById('poop').innerHTML += Date() + "\n";
	document.getElementById('poop').innerHTML += "User: " + textBoxValue + "\n";
	document.getElementById('poop').innerHTML += "Memebot" + document.getElementById('hellro').innerHTML + "\n"
}	