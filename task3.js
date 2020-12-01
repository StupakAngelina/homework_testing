function digital_root(num){
 var int_str = "";
 int_str = int_str + num;
 var str = int_str.split("");
 var root = parseInt(str[0]);
 do {
  int_str = "";
  int_str = int_str + num;
  str = int_str.split("");
  root = parseInt(str[0]);
  for(i=1;i<str.length;i++){
   root = root + parseInt(str[i]);
  }
  num=root;
 }while(root / 10 >= 1);

 
 return root;
}

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2
console.log(digital_root(123123)); // 3
console.log(digital_root(55555555)); // 4