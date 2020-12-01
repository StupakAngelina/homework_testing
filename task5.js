function name_sort(string){
 var list_of_names = string.toUpperCase().split(";");
 var sorted_list = "";
 for(var i = 0; i<list_of_names.length;i++){
  list_of_names[i]=list_of_names[i].split(":")[1] + ":" + list_of_names[i].split(":")[0];
 }
 list_of_names.sort();
 for(var i = 0; i<list_of_names.length;i++){
  sorted_list = sorted_list + "(" + list_of_names[i].split(":")[0] + ", ";
  sorted_list = sorted_list + list_of_names[i].split(":")[1] + ")";
 }
 return sorted_list;
}

console.log(name_sort("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));
console.log(name_sort("Wilfred:Corwill;Fred:Corwill;Barney:Tornbull;Barney:Tornbull;Betty:Tornbull"));