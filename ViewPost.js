var canvas;
var back ;
var i = 0;
function setup (){
canvas = createCanvas(displayWidth,displayHeight);
    //back = createButton("Back");
var storageRef = firebase.storage().ref();
imageRef = storageRef.child('pupies');
storageRef.child('/').listAll().then(function(result){
  result.items.forEach(function(imageRef){
     //console.log(imageRef.toString());
     i+=450;
     displayImage(i,imageRef); 
 })
});

}
function draw(){

}
function mouseWheel(event) {
  //console.log(event.delta);
  var scrollPos = event.delta;
  if(scrollPos > 0){
     resizeCanvas(windowWidth - 20, windowHeight + scrollPos);
  }
 
}


function displayImage(row,image){
    image.getDownloadURL().then(function(url){
      console.log(url.toString());
      var modURL = "https://cors-anywhere.herokuapp.com" + url;
      var modURL = "https://cors-anywhere.herokuapp.com/" + url; 
      tab = createImg(modURL,"test");
      tab.position(200,row);
      tab.style("width","400px");
      tab.style("height","400px");
  
   });
  }
 function getDescription(){
   firebase.database.ref('posts0/').once('value').then(function(snapshot)
   {
     var PostObject = snapshot.val();
     var keys = Object.keys(PostObject)
   })
 }
function queryDatabase(token) {
  firebase.database().ref('posts0/').once('value').then(function(snapshot) {
    var PostObject = snapshot.val();
    var keys = Object.keys(PostObject);
    var currentRow;
    for (var i = 0; i< keys.length; i++) {
      var currentObject = PostObject[keys[i]];
      if (i % 3 == 0) {
        currentRow = document.createElement("div");
        $(currentRow).addClass("row");
        $("#contentHolder").append(currentRow);
      }
      var col = document.createElement("div");
      $(col).addClass("col-lg-4");
      var image = document.createElement("img");
      image.src = currentObject.url;
      $(image).addClass("contentImage");
      var p = document.createElement("p");
      $(p).html(currentObject.description);
      $(p).addClass("contentCaption");
      $(col).append(image);
      $(col).append(p);
      $(currentRow).append(col);
      //create new row on every third entry
      //col-lg-4
    }
    // ...
  });

}
