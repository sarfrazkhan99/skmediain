import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.loadCampaigns = async function(){

const querySnapshot = await getDocs(collection(db,"campaigns"));

let html="";

querySnapshot.forEach((doc)=>{

let data=doc.data();

html+=`

<div class="campaign">

<h3>${data.title}</h3>

<p>Budget: ${data.budget}</p>

<p>${data.description}</p>

<button>Apply</button>

</div>

`;

});

document.getElementById("campaignList").innerHTML=html;

}
