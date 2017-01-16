/*Description:

Instructions

Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/

var capitals = function (word) {
	// Write your code here
	var isUpperCase = function (s){return s===s.toUpperCase() ? true : false;};

	var arrUp = [];
	for(var i = 0; i<word.length;i++){
		if(isUpperCase(word[i])) arrUp.push(i);
	}
	return arrUp.sort();
  
};