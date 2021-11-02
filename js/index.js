var firstname;
var lastname;

$( document ).ready(function() {

    console.log( "ready!" );
    $("a").addClass("test");

});


$("#go").click(function(event)
{
    event.preventDefault();
    firstname = $("#fname").val();
    lastname =$("#lname").val();
    $("#jumbotron h1" ).text(firstname + " " + lastname);
});