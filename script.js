
let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];
 
// Function to remove articles from a band name
function removeArticles(name) {
  // Define the list of articles to be removed
  const articles = ['a', 'an', 'the'];
 
  // Split the band name into words
  const words = name.split(' ');
 
  // Filter out the articles from the words array
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
 
  // Join the filtered words to form the modified band name
  const modifiedName = filteredWords.join(' ');
 
  return modifiedName;
}
 
// Sort the band names in lexicographic order, excluding articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  return nameA.localeCompare(nameB);
});
 
// Get the <ul> element by its id
const bandList = document.getElementById('band');
 
// Iterate over the sorted band names and create <li> elements
for (let i = 0; i < bandNames.length; i++) {
  const li = document.createElement('li');
  li.textContent = bandNames[i];
  bandList.appendChild(li);
}







// let touristSpots = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

// console.log(touristSpots.sort());

// console.log(touristSpots.sort((a,b) =>{

// 	list1 = a.split(" ");
// 	str1 = list1.filter((item) => item != "The" && item != "A" && item != "An");

// 	list2 = b.split(" ");
// 	str2 = list2.filter((item) => item != "The" && item != "A" && item != "An");

// 	if(str1 < str2){return -1;}
// 	if(str1 > str2){return 1;}
// 	return 0;
// }));

// const bandList = document.getElementById(band);

// for(let i=0;i<touristSpots.length;i++){
// 	const li = document.createElement('li');
// 	li.textContent = touristSpots[i];
// 	bandList.appendChild(li);
// }
















