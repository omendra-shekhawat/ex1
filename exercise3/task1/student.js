let currentUser = localStorage.getItem("currentUser");
let parsedUser=JSON.parse(currentUser);
console.log(parsedUser.name);

let log=document.getElementById("log");

log.addEventListener("click", logout);

let strCourses = localStorage.getItem("courses");
let parsedCourses = JSON.parse(strCourses);

let elem = localStorage.getItem(parsedUser);                 
let user = JSON.parse(elem);

// console.log(parsedCourses);

document.getElementById("username").innerHTML = parsedUser.name;

for(i=0;i<parsedCourses.length;i++){
    
    let course=parsedCourses[i];
    checkData(course);
}


function checkData(crc){
    name=JSON.parse(localStorage.getItem("currentUser")).name;
    user=JSON.parse(localStorage.getItem(name));
    if(user[crc]==true){
        console.log(crc);
        
        let h1 = document.createElement("h1");
        h1.innerHTML=crc;
        document.body.append(h1);
        h1.classList.add("flex-container");
        h1.classList.add("content");
    }
    else{
        alert("you have not assigned any course yet!!");
    }
}
function logout(){
    localStorage.removeItem("currentUser");
}
