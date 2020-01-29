const sliders = document.querySelectorAll('input[type="range"]');
const inputs = document.querySelectorAll('input[type="number"]');
const picker = document.querySelector('input[name="custom"]');
const hexOut = document.querySelector('input[name="hex"]');

function updateColor() {
	const name = this.name;
	const valStr = this.value;

	console.log(`${name}`, valStr);
	
	document.documentElement.style.setProperty(`--${name}`, valStr);
	
	const results = document.querySelector(`input.${name}`);
	results.value = `${valStr}`;
	
	for (let i = 0; i < sliders.length; i++) {
		const hexFromRGB = parseInt(sliders[i].value).toString(16);
		sliders[i].value = inputs[i].value;
		console.log(i, hexFromRGB);
	}

	// convert THE VALUES OF R+G+B AND INPUT IN HEX FIELD
	// console.log("G: ", parseInt(('sliders[name="g"]').value).toString(16));
	// console.log("B: ", parseInt(('sliders[name="b"]').value).toString(16));
}

// function customPicker() {
// 	console.log(`${this.name}`, this.value);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// }

sliders.forEach( slider => slider.addEventListener('mousemove', updateColor) );
sliders.forEach( slider => slider.addEventListener('change', updateColor) );
inputs.forEach( input => input.addEventListener('input', updateColor) );
// textInput.forEach( textInput => textInput.addEventListener('input', updateColor) );
// picker.forEach( picker => picker.addEventListener('change', customPicker) );
	
function updateRGB() { //change value of RGB input fields	
	hexOut.value = this.value.replace(/#/, '');
	const rSegment = hexParser(0, 2);
	const gSegment = hexParser(2, 4);
	const bSegment = hexParser(4, 6);

	console.log('hex:', this.name, hexOut.value);
	
	document.querySelector('input[type="number"].r').value = rSegment; // assign new value to inputs
	document.querySelector('input[type="number"].g').value = gSegment; // assign new value to inputs
	document.querySelector('input[type="number"].b').value = bSegment; // assign new value to inputs
	
	console.log('r:', rSegment);
	console.log('g:', gSegment);
	console.log('b:', bSegment);
}

function hexParser(a, b) {
	//converts to hex value to decimal by segments.
	return parseInt(hexOut.value.slice(a, b), 16);
}

picker.addEventListener('input', updateRGB);

// todo
// need to convert hex to decimal and pass through css variable