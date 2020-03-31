
let table=document.createElement("table");
table.style.marginTop="50px";

function addUser(user){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let deleteButton=document.createElement("button");
    let editButton=document.createElement("button");
    td1.innerHTML=user.firstName;
    td2.innerHTML=user.lastName;
    deleteButton.innerHTML="DELETE";
    editButton.innerHTML="EDIT"
    deleteButton.setAttribute("id",user._id);
    tr.append(td1,td2,editButton,deleteButton);
    table.append(tr);
    document.body.append(table);
    //editButton.addEventListener("click",editRow);
    deleteButton.addEventListener("click",deleteData);
    

}
const getAllData = async() => {
    const data = await fetch("http://localhost:3000/users");
    const users = await data.json();
    users.forEach(user => {
        addUser(user);
        console.log(user);
    });
}

getAllData();

const deleteData = async() => {
    //id = '5e8081a0ae7c8de33c870852';
    let ID=event.target.id;
    //console.log(ID);
    console.log("from deletet");
    const result = await fetch("http://localhost:3000/users/" + ID, {
         method: "DELETE",
         headers: {
             'Content-Type': 'application/json'
        },
        //   body: JSON.stringify({
        //       fname: ,
        //       lname: 
        //  })
    });
    getAllData();
}