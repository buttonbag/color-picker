
const slider = document.querySelectorAll('.rgb-sliders input');
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
slider.forEach( slider => slider.addEventListener('mousemove', updateColor) );
slider.forEach( slider => slider.addEventListener('change', updateColor) );
// picker.forEach( picker => picker.addEventListener('change', customPicker) );

// todo
// add a way to type in number values
	
