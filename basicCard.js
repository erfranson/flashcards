function BasicCard (front, back){
	this.front = front;
	this.back = back;
}

var playstation = new BasicCard("What console has sold more xbox one, or playstation?", "Playstation has sold the most!");

console.log(playstation.front);
console.log(playstation.back);

var gallon = new BasicCard("How many cups are in a gallon?", "There are 16 cups in a gallon!");

console.log("-------------------");
console.log(gallon.front);
console.log(gallon.back)




module.exports = BasicCard;