/*Description:

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

Example: 
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/
function GetSum( a,b )
{
   //Good luck!
   var min = 0, max = 0;
if(a<b) {min = a; max = b;}
else {min = b; max = a;}

   var arr2 = [];
   for(var i=min; i<=max;i++){
   	arr2.push(i);
   }
   var sum = 0;
   for(var j = 0; j<arr2.length; j++){
   	sum+=arr2[j];
   }
   return sum;
}