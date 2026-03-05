import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.loadCreators = async function(){

const querySnapshot = await getDocs(collection(db,"creators"));

let html="";

querySnapshot.forEach((doc)=>{

let data = doc.data();

html += `
<div class="creator-card">

<h3>${data.name}</h3>

<p>@${data.instagram}</p>

<p>${data.followers} Followers</p>

<p>${data.category}</p>

<p>${data.city}</p>

</div>
`;

});

document.getElementById("creatorsList").innerHTML = html;

}
