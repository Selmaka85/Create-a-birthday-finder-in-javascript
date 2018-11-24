 //this function just get the value which is insert in the imput with id "number"
           
           //function calculate
function calculate(){
     //define the variable number ( id number)
     //determ the behaviour of the variable number from the input
     var number=document.getElementById("number").value;
         if(number==""){
            alert("Please type your corect age");
            return;
         }else if(number<0){
                  alert("Please insert a positive number.Negative numbers are not accepted!");
             return;
         }else if(number==0){
             alert("Please enter a number higher than 0 to be possible the calculation");
         }
           var date=new Date().getFullYear();
           var birthyear= date-number;
//if in the input is a number then the year will de no more hiden (display:none)
 document.getElementById("year").style.display="block";
 document.getElementById("year").innerHTML="Your Birth Year is: " + birthyear;
        }
           //we select the id and choose what we want the style to do
    document.getElementById("year").style.display="none";
    document.getElementById("button").onclick=function(){
        calculate();//we run the function calculate which is above
    }