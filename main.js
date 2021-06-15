Guest_list_names=[];

function Submit()
{
        var Guestlist= document.getElementById("name_of_the_person").value;
        Guest_list_names.push(Guestlist);
        

    console.log(Guest_list_names);


}


function Display(){
    var removecomma= Guest_list_names.join(" ");
    document.getElementById("Displaylist").innerHTML = removecomma;

}

function Sorted(){
    Guest_list_names.sort();
 console.log(Guest_list_names);
 document.getElementById("Sortedlist").innerHTML = Guest_list_names;    

}

function Searching(){
  var name= document.getElementById("search_name_of_the_person").value;
  var length = Guest_list_names.length;
  var found = 0;
  for(var i=0; i<length; i++){
      if(name==Guest_list_names[i]){
         found= found+1; 
      }
  }
  document.getElementById("namefound").innerHTML = "name found" +found+ "times";
}