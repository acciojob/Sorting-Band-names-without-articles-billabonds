//your code here

let touristSpots = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

console.log(touristSpots.sort());

console.log(touristSpots.sort((a,b) =>{

	list1 = a.split(" ");
	str1 = list1.filter((item) => item != "The" && item != "A" && item != "An");

	list2 = b.split(" ");
	str2 = list2.filter((item) => item != "The" && item != "A" && item != "An");

	if(str1 < str2){return -1;}
	if(str1 > str2){return 1;}
	return 0;
}));