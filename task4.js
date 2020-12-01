function count_pairs(list, num){
 var c = 0;
 for(var i=0;i<list.length;i++){
  for(var j=0;j<list.length;j++){
   if(i!=j){
    if(list[i]+list[j]==num){
    c++;
   }
   }
  }
 }
 c = c/2;
 return c;
}

console.log(count_pairs([1,3,6,2,2,0,4,5], 5)) // 4
console.log(count_pairs([2,3,2,3,3,4], 5)) // 6
console.log(count_pairs([1,1,,4], 5)) // 2