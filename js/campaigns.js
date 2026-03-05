import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


window.postCampaign = async function(){

let title=document.getElementById("title").value;
let budget=document.getElementById("budget").value;
let description=document.getElementById("description").value;

await addDoc(collection(db,"campaigns"),{

title:title,
budget:budget,
description:description

});

alert("Campaign posted");

}
