(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "api key here",
  authDomain: "domain here.firebaseapp.com",
  databaseURL: "database url here",
  projectId: "project id here",
  storageBucket: "subject here.appspot.com",
  messagingSenderId: "id here",
  appId: "api id here"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
	    window.location.href = "../LetItBe-main/index.html";
        }).catch(err => {
            alert(err.message);
        });
        
    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());
