function compare(s1, s2) {

  var chS1 = s1.replace(/[^A-Za-zР-пр-џЈИ]/g, "").split('');
  var chS2 = s2.replace(/[^A-Za-zР-пр-џЈИ]/g, "").split('');
  var sL1 = 0, sL2 = 0;
  if(compareEl(chS1,chS2)) return false;
  for(var i = 0, j = 0; i < s1.length, j < s2.length; i++, j++){
    if(chS1[i]!==s1[i+1]) chS1++;
    if(s2[j]!==s2[j+1]) sL2++;
  }
  return (sL1 === sL2) ? true : false;
}

function compareEl(c1, c2){
  for(var i = 0; i < c1.length; i++){
    for(var j = 0; j < c2.length; j++){
      if(c1[i] === c2[j]) return true;
      else return false;
    }
  }
}

console.log(compare('kl', 'lz'));