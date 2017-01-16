/*Description:

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/
function fakeBin(x){
var arr = x.split('');
for(var i=0;i<arr.length;i++)
{
  if(Number(arr[i])<5) arr[i]='0';
  else if (Number(arr[i])>=5) arr[i]='1';
}
  return arr.join('');

}