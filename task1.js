function filter_list(list){
 var l = list.length;
 for (var i=0;i<list.length;i++){
  if(typeof(list[i])!='number'){
   list.splice(i, 1);
   l = list.length;
   i--;
  }
 }
 return list;
}

console.log(filter_list([1,2,'a','b'])); // [1,2]
console.log(filter_list([1,'a','b',0,15])); // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])); // [1,2,123]