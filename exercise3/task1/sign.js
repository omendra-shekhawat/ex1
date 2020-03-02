let local=document.getElementById("sub");

local.addEventListener("click",register);

function register(){
        let isAdmin=false;
        userName=document.getElementById("uname").value;
        userPassword=document.getElementById("pass").value;
        confPassword=document.getElementById("c-pass").value;
        let radio=document.getElementById("ad");
       
        if(userPassword!=confPassword){
            alert("password does not match");
        }
    else{

        if(radio.checked){
            isAdmin=true;
        }else{

        }
        
        
            let user={};

            user.Name=userName;
            user.Pass=userPassword;
            user.isAdmin=isAdmin;
            
            console.log(user);
            let strUser=JSON.stringify(user);
            localStorage.setItem(userName,strUser);
        
    }
}





