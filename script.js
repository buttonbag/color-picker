
const sliders = document.querySelectorAll('input[type="range"]');
const inputs = document.querySelectorAll('input[type="number"]');
// const picker = document.querySelectorAll('.color-picker input');

function updateColor() {
	// console.log(`${this.name}`, this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
	
	const results = document.querySelector(`input.${this.name}`);
	results.value = `${this.value}`;
	
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

// todo
// add a way to type in number values
	
