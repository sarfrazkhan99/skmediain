import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "skmediain-c7991.firebaseapp.com",
  projectId: "skmediain-c7991",
  storageBucket: "skmediain-c7991.appspot.com",
  messagingSenderId: "121601764922",
  appId: "1:121601764922:web:example"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadCreators() {

  const querySnapshot = await getDocs(collection(db, "creators"));

  const list = document.getElementById("creatorsList");
  list.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const c = doc.data();

    list.innerHTML += `
      <div class="creator">

        <img src="${c.photo}" width="100%">

        <h3>${c.name}</h3>

        <p>${c.category}</p>

        <p>${c.followers}</p>

        <a href="https://instagram.com/${c.instagram}" target="_blank">
        <button>Instagram</button>
        </a>

      </div>
    `;
  });

}

loadCreators();
