import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.loadUsers = async function(){

const querySnapshot = await getDocs(collection(db,"users"));

let html="";

querySnapshot.forEach((doc)=>{

let data=doc.data();

html+=`

<tr>

<td>${data.name}</td>
<td>${data.email}</td>
<td>${data.role}</td>

</tr>

`;

});

document.getElementById("usersTable").innerHTML=html;

}
