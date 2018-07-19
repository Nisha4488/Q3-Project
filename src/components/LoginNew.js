const auth= firebase.auth();
auth.signInwithEmailAndPassword(email, password)
auth.onAuthStateChanged(firebaseUser=>{})
