var firebaseConfig = {
      apiKey: "AIzaSyDzlVEHaaitlFCuwl8zK5GgM96JnCGjlGo",
      authDomain: "tweeter-e6878.firebaseapp.com",
      databaseURL: "https://tweeter-e6878-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "tweeter-e6878",
      storageBucket: "tweeter-e6878.appspot.com",
      messagingSenderId: "1079432340594",
      appId: "1:1079432340594:web:eba616b03e2dde21064eeb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
