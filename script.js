
// const slider = document.querySelectorAll('.rgb-sliders input');
const inputs = document.querySelectorAll('input');
// const picker = document.querySelectorAll('.color-picker input');

function updateColor() {
	console.log(`${this.name}`, this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value);
	
	const results = document.querySelector(`input.${this.name}`);
	results.value = `${this.value}`;

}

// function customPicker() {
// 	console.log(`${this.name}`, this.value);
// 	document.documentElement.style.setProperty(`--${this.name}`, this.value);
// }
inputs.forEach( inputs => inputs.addEventListener('mousemove', updateColor) );
inputs.forEach( inputs => inputs.addEventListener('change', updateColor) );
inputs.forEach( inputs => inputs.addEventListener('input', updateColor) );
// textInput.forEach( textInput => textInput.addEventListener('input', updateColor) );
// picker.forEach( picker => picker.addEventListener('change', customPicker) );

// todo
// add a way to type in number values
	
