let currentUser = localStorage.getItem("currentUser");

let newCourse = document.getElementById("Add");
newCourse.addEventListener("click", addNewCourse);

let log=document.getElementById("log");

log.addEventListener("click", logout);
if (!localStorage.getItem("courses")) {
   
    localStorage.setItem("courses", JSON.stringify(["Linux"]));
}


let strCourses = localStorage.getItem("courses");
let parsedCourses = JSON.parse(strCourses);

//////----------------addying new course function------>>>>>
function addNewCourse() {
    let newCourse = prompt("Enter new course:");
    if (newCourse) {
        parsedCourses.push(newCourse);
        strCourses = JSON.stringify(parsedCourses);
        localStorage.setItem("courses", strCourses);
    }
    document.location.reload();

}

///=------------------------------------------<<<<<<


let parsedCurrentUser = JSON.parse(currentUser);

document.getElementById("username").innerHTML = parsedCurrentUser.name;
if (parsedCurrentUser.isAdmin) {
    document.getElementById("username").innerHTML += " (Admin)";
}

for (i = 0; i < localStorage.length; i++) {
    let elem = localStorage.getItem(localStorage.key(i));
    let parsedUser = JSON.parse(elem);
  
    if (parsedUser.isAdmin == false) {
        // console.log(parsedUser.Name);
        len = parsedCourses.length;
        // for (j = 0; j < len; j++) {
        //     parsedUser[parsedCourses[j]] = false;
        // }
        let jsonUser = JSON.stringify(parsedUser);
        localStorage.setItem(parsedUser.Name, jsonUser);
        createUserTab(parsedUser);
    }
}

///-----------------------user Tab Create Function------->>>>
function createUserTab(user) {
    
    let userName = document.createElement("a");
    let h1 = document.createElement('h3');
    h1.addEventListener("click", toggleTopics);
    userName.innerHTML = user.Name;
    h1.append(userName);
    let divMain = document.createElement("div")
    let divIn = document.createElement("div")
    userName.classList.add("userNames");

    for (let k = 0; k < parsedCourses.length; k++) {

        let divbtn = document.createElement("div")
        let div1 = document.createElement("div");
        let courseName = document.createElement("a")
        courseName.innerHTML = parsedCourses[k];
        let addButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        addButton.innerHTML = "Add";
        deleteButton.innerHTML = "Delete";
        divbtn.append(addButton, deleteButton);
        div1.append(courseName, divbtn);
        divIn.append(div1)
        div1.classList.add("coursesRow");
        div1.classList.add("flex-container");
        addButton.classList.add("addButton");
        deleteButton.classList.add("delButton");
        courseName.classList.add("courseName");
        addButton.addEventListener("click",assignCourse);
        deleteButton.addEventListener("click",removeCourse);

        addButton.style.display = "";
        deleteButton.style.display="none";
        if(user[parsedCourses[k]]==false){
            addButton.style.display = "";
            deleteButton.style.display="none";
        }
        else if(user[parsedCourses[k]]==true){
            addButton.style.display = "none";
            deleteButton.style.display="";
        }
        
    

    }
    divMain.classList.add("users");
    divIn.classList.add("topics");
    divMain.append(h1, divIn);
    document.body.append(divMain);
}
//--------------------------------------------------------<<<<<<

function toggleTopics() {
    event.target.parentElement.nextElementSibling.classList.toggle("show");
 
}
function assignCourse(){
    courseID=event.target.parentElement.previousElementSibling.innerHTML;
    userID=event.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.innerHTML;
    let strUser=localStorage.getItem(userID);
    let parsedUser=JSON.parse(strUser);
    parsedUser[courseID]=true;
    strUser=JSON.stringify(parsedUser);
    localStorage.setItem(userID,strUser);
    event.target.style.display = "none";
    event.target.nextElementSibling.style.display="";
}
function removeCourse(){
    courseID=event.target.parentElement.previousElementSibling.innerHTML;
    userID=event.target.parentElement.parentElement.parentElement.previousElementSibling.firstChild.innerHTML;
    let strUser=localStorage.getItem(userID);
    let parsedUser=JSON.parse(strUser);
    parsedUser[courseID]=false;
    strUser=JSON.stringify(parsedUser);
    localStorage.setItem(userID,strUser);
    event.target.style.display = "none";
    event.target.previousElementSibling.style.display="";

}
function logout(){
    localStorage.removeItem("currentUser");
}

