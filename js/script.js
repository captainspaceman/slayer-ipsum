// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4Gm3vjF7vtS6jAg0V2uUHaTew1suF2NI",
    authDomain: "slayer-ipsum.firebaseapp.com",
    databaseURL: "https://slayer-ipsum.firebaseio.com",
    projectId: "slayer-ipsum",
    storageBucket: "slayer-ipsum.appspot.com",
    messagingSenderId: "363571315736"
  };  
  
  //for this app I'm going to need to copy and paste a WHOLE lot of Slayer lyrics.
  //I'll put them into an array 
  //the User can access the data in that array by choosing how many 
  //paragraphs they want, and then clicking the "generate" button
  //the array data will be returned in random order. 

  $(document).ready(function(){


  var chooseParagraph = document.getElementById("chooseParagraph");
  var submitButton = document.getElementById("submitButton");
  
  $("#submitButton").click(function(){
    location.reload();
  });

  $("#facebook-share").click(function(){
    console.log("Facebook share button clicked");
  })

  $("#twitter-share").click(function(){
    console.log("Twitter share button clicked");
  })

  $("#email-share").click(function(){
    console.log("Email share button clicked");
  })


  })

  