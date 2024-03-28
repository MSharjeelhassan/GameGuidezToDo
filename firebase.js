// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  set,
  ref,
  push,
  onValue,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbMbhJl39RTIjsa5O56DVQ06K3HNNOlDU",
  authDomain: "todoguidez.firebaseapp.com",
  projectId: "todoguidez",
  storageBucket: "todoguidez.appspot.com",
  messagingSenderId: "28453798958",
  appId: "1:28453798958:web:378b98f2c13636ba514bbf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();


// +++++++++++++++++++++++++        GET DATA ++++++++++++++++++++++++++++++++++++++++++

// let dataRef = ref(db,`task/`);

// onValue(dataRef,(snapshot)=>{

//     setupGuides(snapshot.val());

// })












// ++++++++++++++++++++    onAuthStateChanged ++++   ++++++++++++++++++++++++++++++++++++

onAuthStateChanged(auth, (person)=>{
    console.log(person);
if(person){
    let array = [
        {
          title: "ponkaa",
          content: "lorem",
        },
        { title: "ponka2", 
        content: "lorem ipsum" },
      ];
    let divd = document.querySelector('.guides');
// console.log(divd);
divd.innerHTML = '';
for(let i = 0; i<array.length;i++){

divd.innerHTML += `<li>
<div class="collapsible-header grey lighten-2" >${array[i].title}</div>
<div class="collapsible-body white">${array[i].content}</div>
</li>`

}
}

else {
    let picDiv = document.querySelector('#picDiv');
    picDiv.innerHTML = `<div class=" row">
    <div class="col s12">
        <img id="img" src="./img/comeinside.jpg" alt="" class="col s12 center-align"
        style="height: 505px; width: 825px;">
        <div class="center-align"><span style="font-size: larger; font-weight: bolder;" class=" red lighten-4">WellCome Let's do the Tasking thing, just Log-In or
            Sign-Up</span></div>
    </div>
</div>`
}
})

// ++++++++++++++++++ Making Object  ++++++++++++++++++++++++++++++++++ ++++++++++++++++    +++++++++++++++
// let user = {};



// +++++++++++++++++++++++++++++++++++      SIGN UP   ++++++++++++++++++++++++++++++++++++++++++++++

let signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let signupEmail = document.getElementById("signup-email").value;
    let signupPassword = document.getElementById("signup-password").value;
    let person ={}; 
    console.log(signupEmail, signupPassword);
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(
        (email) => {

            console.log(email.user.uid);
            person['email'] = signupEmail;
            person.password = signupPassword;
            person.id = email.user.uid;
              alert("A new User is Created");
            console.log(person);

      let modal = document.querySelector("#modal-signup");
      signUpForm.reset();
      M.Modal.getInstance(modal).close();

let reference = ref(db,`task/${person.id}`);
set(reference,person) ;
    }
  ).catch((er)=>{
console.log(er.message)
  })
});

// +++++++++++++++++++++++++++++++++++++++++++++++      LOG OUT    ++++++++++++++++++++++++++++++++++++++++

let logOut = document.getElementById("logout");
logOut.addEventListener("click", () => {
  let modalLogout = document.getElementById("modal-logout");
  signOut(auth).then(()=>{
    console.log('user logged out');
  });

  setTimeout(() => {
    M.Modal.getInstance(modalLogout).close();
  }, 2000);

});

// +++++++++++++++++++++++++++++++++++++++      LOG IN     ++++++++++++++++++++++++++++++++++++++++++

let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (kuchbhi) => {
  kuchbhi.preventDefault();
  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = loginForm["login-password"].value;
  signInWithEmailAndPassword(auth, loginEmail, loginPassword).then((a) => {
    // console.log(a.user);
    loginForm.reset();
    let modal  = document.getElementById('modal-login');
    M.Modal.getInstance(modal).close();
  });
});


// +++++++++++++++++++++++++     CREATE TASK  ++++++++++++++++++++++++++++++++++

let createForm = document.getElementById(create-form);

createForm.addEventListener('submit',(e)=>{
e.preventDefault();

let title = document.getElementById('title').value;
let content = document.getElementById('content').value;




})