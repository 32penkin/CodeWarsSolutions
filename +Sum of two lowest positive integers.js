/*Description:

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/
function sumTwoSmallestNumbers(numbers) {  
  //Code here
 var min1;
var min2;
if(numbers[0]<numbers[1]){
	min1 = numbers[0];
	min2 = numbers[1];
}
else {
	min1 = numbers[1];
	min2 = numbers[0];
}

for(var i=2; i<numbers.length;i++){
	if(min1>numbers[i]){
		min2 = min1;
		min1 = numbers[i];
	}
	else if(min2>numbers[i]) min2 = numbers[i];
}
return min1+min2;
  
};