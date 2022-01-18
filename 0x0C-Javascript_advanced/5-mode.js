function changeMode(size, weight, transform, background, color) {
	return function() {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}
function main() {
	let spooky = changeMode(9, bold, uppercase, pink, green);
	let darkMode = changeMode(12, bold, capitalize, black, white);
	let screamMode = changeMode(12, normal, lowercase, white, black);
	let paragraph = document.createElement('p');
	paragraph.innerHTML = "Welcome Holberton!";
	document.body.appendChild(paragraph);
	let btnSpooky = document.createElement('button');
	btnSpooky.innerHTML = "Spooky";
	document.body.appendChild(btnSpooky);
	let btnDark = document.createElement('button');
	btnDark.innerHTML = "Dark mode";
	document.body.appendChild(btnDark);
	let btnScream = document.createElement('button');
	btnScream.innerHTML = "Scream mode";
	document.body-appendChild(btnScream);
	btnSpooky.onclick = spooky;
	btnDark.onclick = darkMode;
	btnScream.onclick = screamMode;
}
main();
