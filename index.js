alert('Hello there! This is my first project that is entirely based on JavaScript. Enjoy scrolling! :D');
window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200) {
        document.getElementById("int").style.scale="0.6";
        document.getElementById("int").style.top="20vh";
        document.getElementById("int").style.marginLeft="23vw";
        document.getElementById("a").style.width="140vw";
        document.getElementById("a").style.left="-50vw";
        document.getElementById("b").style.height="40vh";
        document.getElementById("c").style.height="60vh";
        document.getElementById("b").style.top="40vh";
        document.getElementById("c").style.top="20vh";
        document.getElementById("w").style.top="28vh";
        document.getElementById("x").style.top="43vh";
        document.getElementById("y").style.top="28vh";
        document.getElementById("z").style.top="28vh";
        document.getElementById("text").innerHTML="House With Garage";
      } 
    else {
        document.getElementById("int").style.scale="1";
        document.getElementById("int").style.top="0vh";
        document.getElementById("int").style.marginLeft="0vw";
        document.getElementById("a").style.width="80vw";
        document.getElementById("a").style.left="10vw";
        document.getElementById("b").style.height="60vh";
        document.getElementById("c").style.height="45vh";
        document.getElementById("b").style.top="20vh";
        document.getElementById("c").style.top="35vh";
        document.getElementById("w").style.top="47vh";
        document.getElementById("x").style.top="62vh";
        document.getElementById("y").style.top="47vh";
        document.getElementById("z").style.top="47vh";
        document.getElementById("text").innerHTML="House";
      } 
    }
