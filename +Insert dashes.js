/*Description:

Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
*/
function insertDash(str) {
   //code me
   str1 = str.toString();
     var idx = 0;
    while (idx < str1.length-1) {
        if (Number(str1[idx]) % 2 === 1 && Number(str1[idx+1]) % 2 === 1) {
          str1 = str1.slice(0,idx+1) + "-" + str1.slice(idx+1);
          idx = idx + 2;
        }
        else {  
            idx++;
        }
  }
  return str1;  
}