/*Description:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/
function getCount(str) {
  var vowelsCount = 0;
  var str1 = str.replace(/[aeiou]/g,'');
  vowelsCount = str.length - str1.length;
  
  return vowelsCount;
}