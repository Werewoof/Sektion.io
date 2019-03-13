var borderAmount = 4;

// Make a blue border-left for the nav-bar h1 when selected 
 $( "#title-input" ).focus(function() {
    $( "#nav-bar-head" ).css( "border-left", `${borderAmount}px solid var(--button-blue)` );
});
$( "#title-input" ).focusout(function() {
    $( "#nav-bar-head" ).css( "border-left", "0px solid var(--button-blue)" );
});

 // Make a blue border-left for the nav-bar h3 when selected 
 $( "#description-input" ).focus(function() {
    $( "#nav-bar-description" ).css( "border-left", `${borderAmount}px solid var(--button-blue)` );
});
$( "#description-input" ).focusout(function() {
    $( "#nav-bar-description" ).css( "border-left", "0px solid var(--button-blue)" );
});
