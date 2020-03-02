alert("hello");

let b1=document.getElementById("box1");
b1.addEventListener("click",changeText);
arr=["#b8860b","#dc143c","#000000"];
arr2=["#000000","#FF6347","#FF4500","#FFD700","#FFA500"];
let id=setInterval(changeColorOf2,1000);
let i=0;
let j=0;
let timer;
let timer1;
function changeColorOf2(){

       if(i>2){
           i=0;

       }
       document.getElementById("box2").style.backgroundColor=arr[i];
       i++;
}

function changeText(){
    document.getElementById("box3").innerHTML="oops!!!";
}

// function changeColorOf4(){
   
//     if(j>4){
//         j=0;
//         document.getElementById("box4").style.backgroundColor=arr2[j];
//     }
//     else{
//         document.getElementById("box4").style.backgroundColor=arr2[j];
        
//     }
//     j++;
// }

// function changeColorOf4_Inverse(){
   
//     if(j<0){
//         j=4;
//         document.getElementById("box4").style.backgroundColor=arr2[j];
//     }
//     else{
//         document.getElementById("box4").style.backgroundColor=arr2[j];
        
//     }
//     j--;
// }


let id2;
document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
      clearInterval(id2);   
      previous()
          break;

      case 38:
          clearInterval(id2);   
           next();
          break;

      case 39:
          clearInterval(id2);   
          next();
          break;

      case 40:
          clearInterval(id2);   

          previous();
          break;
  }
};

let colors = [ 'red', 'green', 'yellow', 'blue' ,'AliceBlue', 'Aqua' , "Aquamarine "];
let count=-1;
function next(){
  if(count<-1 || count==colors.length-1){
      count= -1;
  
  }
  count++;
  document.getElementById("box4").style.backgroundColor=colors[count];    
   id2=setTimeout(next,1000)
  

}

function previous(){

  if(count == 0){
      count=colors.length;
  }

  count--;
  document.getElementById("box4").style.backgroundColor=colors[count];
   
  id2=setTimeout(previous,1000)


}
