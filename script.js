function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens =  "your encounter a monster";
      break;
      case "back":
      whatHappens =  "you arrived home";
      break;
      case "right":
      whatHappens =  "you found a river";
      break;
      case "left":
      whatHappens =  "you run into a troll";
      break;
      default:
      whatHappens =  "please enter a valid direction";
  }
  return whatHappens;
}



























// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var colortext  = document.querySelector(".colorreflect");

// function setGradient() {
//   // console.log("Are you reading")
//     body.style.background =
//     "linear-gradient(to right, "
//     +color1.value
//     +", "
//     +color2.value 
//     +")";

//     colortext.innerHTML = color1.value + "  " + color2.value;
// }




// color1.addEventListener("input",setGradient);
// // color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient); 































//var button = document.getElementById("enter");
//var input = document.getElementById("userinput");
//var ul = document.querySelector("ul");

//button.addEventListener("click", function() {
  //  if (input.value.length > 0) {
   // var li = document.createElement("li");
   // li.appendChild(document.createTextNode(input.value));
    //ul.appendChild(li);
  //  input.value = "";
  //  }
//}) 

//input.addEventListener("keypress", function(event) {
  //  console.log(event);
//}) 