var dark = false;
function darkmode(){
   dark = !dark;
 
   if(dark){
   document.getElementById("bulb").src = "https://img.icons8.com/ultraviolet/50/000000/reflector-bulb.png" ;
   document.getElementById("body").style.backgroundColor = "black";
   document.getElementById("body").style.color = "#ffebcd";
   document.getElementById("nav").style.backgroundColor ="black";
   for(var i = 0 ; i < document.getElementsByTagName("button").length ; i++){
     document.getElementsByTagName("button").item(i).style.color = "#ffebcd";
     document.getElementById("MenuDark").style.backgroundColor="#ffebcd";
   }
   for(var i = 0 ; i < document.getElementsByTagName("a").length ; i++){
     document.getElementsByTagName("a").item(i).style.color = "#ffebcd";
   }
   for(var i = 0 ; i < document.getElementsByTagName("p").length ; i++){
     document.getElementsByTagName("p").item(i).style.color = "#ffebcd";
   }
   
   }
   else{
   document.getElementById("bulb").src = "https://img.icons8.com/office/50/000000/reflector-bulb.png" ;
   document.getElementById("body").style.backgroundColor = "white";
   document.getElementById("body").style.color = "black";
   document.getElementById("nav").style.backgroundColor ="white";
   for(var i = 0 ; i < document.getElementsByTagName("button").length ; i++){
     document.getElementsByTagName("button").item(i).style.color = "black";
   }
   for(var i = 0 ; i < document.getElementsByTagName("a").length ; i++){
     document.getElementsByTagName("a").item(i).style.color = "black";
   }
   }

}


var grid = false;

function viewmode(){
     grid = !grid;
     if(grid){
       document.getElementById("project-grid").style.display = "block";
       document.getElementById("project-slide").style.display="none";
       document.getElementById("toggle-view").innerText = "Slide View";
     }   
     else{
       document.getElementById("project-grid").style.display = "none";
       document.getElementById("project-slide").style.display="flex";
       document.getElementById("toggle-view").innerText = "Grid View";
     }
}



