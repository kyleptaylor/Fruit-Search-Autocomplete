const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function searchHandler(e) {
	const searchWord = e.target.value;
	const matchedResults = search(searchWord);
	showSuggestions(matchedResults, searchWord);
}

function search(str) {
	let lowerCased = str.toLowerCase();
	const results = fruit.filter(
		(word) => word.toLowerCase().includes(lowerCased)
		);
	return results;
}

let originalInputValue = ''; 

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if (inputVal.length > 0){
		originalInputValue = inputVal;
		for (const item of results){
			const suggestion = document.createElement('li');
			suggestion.innerText = item;
			suggestions.appendChild(suggestion);
			suggestion.addEventListener('mouseenter', hoverEffect);
			suggestion.addEventListener('mouseleave', hoverEffectLeave)
		}
	}
}

function useSuggestion(e) {
	const selectedSug = e.target.innerText;
	input.value = selectedSug;
	suggestions.innerHTML = '';
	
	// confetti.js (External Code => https://confetti.js.org/more.html)

	confetti({
		spread: 180,
		ticks: 50,
		gravity: 0.8,
		origin: { y: 0.08 },
		decay: 0.94,
		startVelocity: 30,
		particleCount: 300,
		scalar: 4,
		shapes: ["image"],
		shapeOptions: {
		  image: [{
			  src: "https://particles.js.org/images/fruits/apple.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/avocado.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/banana.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/berries.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/cherry.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/grapes.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/lemon.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/orange.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/peach.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/pear.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/pepper.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/plum.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/strawberry.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/watermelon.png",
			  width: 32,
			  height: 32,
			},
			{
			  src: "https://particles.js.org/images/fruits/watermelon_slice.png",
			  width: 32,
			  height: 32,
			},
		  ],
		},
	  });

	// End confetti.js
};

function hoverEffect (e) {
	const hoverSug = e.target.innerText;
	input.value = hoverSug;
}

function hoverEffectLeave (e) {
	input.value = originalInputValue;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
