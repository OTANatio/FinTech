//set up firebase database here...

//sign in
user = firebase.auth().currentUser
//get user id
user.uid
//get user email
user.email

//signup with email and password
function signup(){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error({
        
    }))
}