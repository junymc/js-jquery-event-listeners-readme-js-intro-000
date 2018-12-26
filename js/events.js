function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  })
}

function framIt() {
  $('img').on("load", function() {
    addClass("tasty")
  })
}//define functions here

$(document).ready(function(){

// call functions here

});
