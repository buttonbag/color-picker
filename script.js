const sliders = document.querySelectorAll('input[type="range"]');
const inputs = document.querySelectorAll('input[type="number"]');
const picker = document.querySelector('input[name="custom"]');
const hexOut = document.querySelector('input.hex');

function updateColor() {
	const name = this.name;
	const valStr = this.value;

	console.log(`${name}`, valStr);

	document.documentElement.style.setProperty(`--${name}`, valStr);
	
	const results = document.querySelector(`input.${name}`);
	results.value = `${valStr}`;
	
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].value = inputs[i].value;
	}

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
	
function updateHex() { //change value of hex input field
	hexOut.value = this.value.replace(/#/, '');

	console.log('hex:', this.name, hexOut.value);


	// parseInt(this.value).toString(16)); 
		//converts to hex value by first changing to decimal then re-convert back to string.
	
}

picker.addEventListener('input', updateHex);

// todo
// need to convert hex to decimal and pass through css variable