import { db } from "./firebase.js"
import { collection,getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"

async function loadCreators(){

const snapshot=await getDocs(collection(db,"creators"))

const list=document.getElementById("creatorsList")

list.innerHTML=""

snapshot.forEach(doc=>{

const c=doc.data()

list.innerHTML+=`

<div class="creator">

<img src="${c.photo}" />

<h3>${c.name}</h3>

<p>${c.category}</p>

<p>${c.followers}</p>

<a href="https://instagram.com/${c.instagram}" target="_blank">

<button>Instagram</button>

</a>

</div>

`

})

}

loadCreators()
