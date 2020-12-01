function first_non_repeating_letter(string){
 var str = string.split("");
 var char = "";
 var flag = 0;
 for(var i = 0; i < str.length; i++){
  char = str[i];
  flag = 1;
  for(var j=0;j<str.length;j++){
   if(i!=j){
    if(str[j]==char){
    flag = 0;
    char = "";
    break;
   }
   }
   
  }
  if(flag==1){
   break;
  }
  
 }
 return char;
}

console.log(first_non_repeating_letter("stress")); // 't'
console.log(first_non_repeating_letter("sttrreess")); // ''