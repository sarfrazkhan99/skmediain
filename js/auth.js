import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// SIGNUP
window.signup = async function(){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let role = document.getElementById("role").value;

try{

const userCredential =
await createUserWithEmailAndPassword(auth,email,password);

const user = userCredential.user;

await setDoc(doc(db,"users",user.uid),{

name:name,
email:email,
role:role

});

alert("Signup successful");

window.location.href="login.html";

}catch(error){

alert(error.message);

}

}


// LOGIN
window.login = async function(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login success");

window.location.href="creator-dashboard.html";

}catch(error){

alert(error.message);

}

}
