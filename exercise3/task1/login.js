let local=document.getElementById("log");

local.addEventListener("click",login);

function login()
{   
    let userName=document.getElementById("uname").value;
    let userPass=document.getElementById("pass").value;
   
    
   

    let usersData = JSON.parse( localStorage.getItem(userName));
    console.log(usersData.Name,usersData.Pass);


    let currentUser={};
    currentUser.name=userName;
     //currentUser.isAdmin=
   
    
    if(userName==usersData.Name && userPass==usersData.Pass)
      {
         if(usersData.isAdmin!=false){
            currentUser.isAdmin=true;
            let strUser=JSON.stringify(currentUser);
            localStorage.setItem("currentUser",strUser);
          window.open("admin.html");
         }
         else{
            currentUser.isAdmin=false;
            let strUser=JSON.stringify(currentUser);
            localStorage.setItem("currentUser",strUser);
            window.open("student.html");
         }
      }
      
    
}
    
