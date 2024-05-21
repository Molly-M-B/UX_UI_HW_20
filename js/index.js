// preloader javascript
function fade(){
    $(".preloader").fadeOut("slow");
}

setTimeout(fade, 4000);

$( "#v-pills-summary-tab" ).on( "click", function() {
    $( this ).tigger("active");
  } );