//not in use
var fName
var value
var email
var user = new User();
//var user = new User();
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFryzejxSYbxM9yLhHphBQzo3ZZR2Z6w4",
    authDomain: "go-news-3c47d.firebaseapp.com",
    databaseURL: "https://go-news-3c47d.firebaseio.com",
    projectId: "go-news-3c47d",
    storageBucket: "go-news-3c47d.appspot.com",
    messagingSenderId: "337934705204",
    appId: "1:337934705204:web:15d127c5ce6d9add4ba061"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

function create(){
    window.location.href = "createAccount.html";
}

//sets the functions on pressing the login button
$("#btn-login").click(function(){
    email = $("#email").val();
    var password = $("#password").val();
    user.email = email;
    
    if((email !== null && password !== null) && (email !== "" && password !== "")){
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
   
        result.catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
           
            
            window.alert("Message : " + errorMessage);
        });
        
    }
    else{
       window.alert("Please fill out all fields. ")
    }
    
});

//sets the functions on pressing the signup button
$("#btn-createAccount").click(function(){
    var email = $("#email").val();
    var password = $("#password").val();
   // var cPassword = $("#confirmPassword").val();

    if(email !== null && password !== null){
        if(password === password){
            var result = firebase.auth().createUserWithEmailAndPassword(email, password);
            result.catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
        
                console.log(errorCode);
                console.log(errorMessage);
        
                window.alert("Message : " + errorMessage);
            });
        }
        else{
            window.alert("Password do not match with the Confirm Password")
        }
    }
    else{
        window.alert("Please fill out all fields. ")
    }
});

//sets the functions on pressing the update button
$("#btn-update").click(function(){
    var phone = $("#phone").val();
    var address = $("#address").val();
    var email = $("#email").val();
     fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var gender = $("#gender").val();
     //user.fName = fName;
    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(phone !== null && address !== null && fName !== null && gender !== null && sName !== null){
          var userData = {
           //  "phone":phone,
            // "address":address,
             //"gender":gender,
             "firstName":fName,
             "secondName":sName,
             "email":email
          };

          usersRef.set(userData, function(error){
              if(error){
                var errorCode = error.code;
                var errorMessage = error.message;
      
                console.log(errorCode);
                console.log(errorMessage);
      
                window.alert("Message : " + errorMessage);
              }
              else{
                 window.location.href = "index.html";
              }
          });

    }
    else{
        window.alert("Please fill out all fields.")
    }
});    
    
//sets the functions on pressing the resetPassword button
$("#btn-resetPassword").click(function(){
    var auth = firebase.auth();
    var email = $("#email").val();

    if(email !== ""){
        auth.sendPasswordResetEmail(email).then(function(){
           window.alert("Email has been sent to you, Please check and verify.");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
  
            console.log(errorCode);
            console.log(errorMessage);
  
            window.alert("Message : " + errorMessage);
        });
    }
    else{
        window.alert("Please enter your email first.")
    }
});      