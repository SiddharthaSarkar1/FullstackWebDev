// var para1 = document.getElementById('para1');
// para1.innerHTML = "Hello World Using JavaScript";

$('#para1').html("Hello World Using JQuery");
$('#para1').css("color", "blue");

$('#para2').addClass("col-red");

$('#para3').hide();

$("h1").css({
    fontSize: "50px",
    color: "Orange"
});

$(".div1").css({
    height: "150px",
    width: "150px",
    backgroundColor: "cyan",
    borderRadius: "50%"
});

$(".btn1").click(function (){
    alert("Button One is clicked!");
});

$(".btn2").on("click", function(){
    alert("Button Two is clicked!");
});

$("a").on("click", function(event){
    event.preventDefault();
    alert("Anchor tag is clicked!");
});

$(".div2").css({
    height: "150px",
    width: "150px",
    backgroundColor: "green",
});

$(".div2").on("click", function(){
    var element = $(this);
    element.width(element.width() + 20 + "px");
});