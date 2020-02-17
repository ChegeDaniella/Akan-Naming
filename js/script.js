var maleout;
var femaleout;
var dd, day, mm, yy, result, manClick, femClick;
var femClick;
var manClick;
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua","Adowa","Abenna","Akua","Yaa","Afua","Ama"];

//get the input from the form
function getInputValue() {
    day = new Date(document.getElementById("calac").value);
    dd=day.getDay();
    mm=day.getMonth();
    yy=day.getFullYear();
    result=dd; 
}
 function myFunction(){
    var gender = document.getElementById('myselect').value

     getInputValue();
     if(gender==="male"){
         maleout=maleNames[dd];
         alert("Your Male Akan name is"+" "+maleout);
    
     } else {
         femaleout=femaleNames[dd]
         alert("Your Female Akan name is"+" "+femaleout);
 
    }  
}
 
