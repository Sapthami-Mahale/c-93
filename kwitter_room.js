
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyA9SzmkfJrJt4J8Gk1JQ_dhwX9vgx5cm3Q",
      authDomain: "kwitter-da4cc.firebaseapp.com",
      databaseURL: "https://kwitter-da4cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-da4cc",
      storageBucket: "kwitter-da4cc.appspot.com",
      messagingSenderId: "1046894956147",
      appId: "1:1046894956147:web:c595a3f023a0ba354ba406",
      measurementId: "G-XQGREH77YV"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
