
var firebaseConfig = {
    apiKey: "AIzaSyDKkkpO0tzmvRmeEHF3jO19HlmRV1fwoMw",
authDomain: "kwitter-930ae.firebaseapp.com",
databaseURL: "https://kwitter-930ae-default-rtdb.firebaseio.com",
projectId: "kwitter-930ae",
storageBucket: "kwitter-930ae.appspot.com",
messagingSenderId: "796107622277",
appId: "1:796107622277:web:245e4976c56fbd25d0a6ec"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
  function addroom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
        }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name- "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";