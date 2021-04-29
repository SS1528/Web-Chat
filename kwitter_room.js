// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA-A8aOOFBvkMax4a2idSeBQer0TTJZJQU",
  authDomain: "let-s-chat---web-app.firebaseapp.com",
  databaseURL: "https://let-s-chat---web-app-default-rtdb.firebaseio.com",
  projectId: "let-s-chat---web-app",
  storageBucket: "let-s-chat---web-app.appspot.com",
  messagingSenderId: "503211230843",
  appId: "1:503211230843:web:b3e0903401ebf2953044de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name;");
      localStorage.removeItem("room_name;");
      window.location.replace("kwitter.html");
}