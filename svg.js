/*var pic = document.getElementById("vimage");
console.log(pic)
coyc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
coyc.setAttribute("cx", "280");
coyc.setAttribute("cy", "220");
coyc.setAttribute("r" , "10");
console.log(coyc);
pic.appendChild(coyc);
soyc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
soyc.setAttribute("cx", "220");
soyc.setAttribute("cy", "220");
soyc.setAttribute("r", "10");
pic.appendChild(soyc);
shoyc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
shoyc.setAttribute("cx", "250");
shoyc.setAttribute("cy", "260");
shoyc.setAttribute("r", "6");
pic.appendChild(shoyc);
*/

var oldX = -1, oldY = -1;

var pic = document.getElementById("vimage");

var drawDaDot = function(x, y){
  coyc1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  coyc1.setAttribute("cx", x);
  coyc1.setAttribute("cy", y);
  coyc1.setAttribute("r", "8");
  coyc1.setAttribute("fill", "purple");

  pic.appendChild(coyc1);
}

var drawDaLine = function(x1, y1, x2, y2){
  loin = document.createElementNS("http://www.w3.org/2000/svg", "line");

  loin.setAttribute("x1", x1);
  loin.setAttribute("x2", x2);
  loin.setAttribute("y1", y1);
  loin.setAttribute("y2", y2);
  loin.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2")
  pic.appendChild(loin);
}

var cwick = function(e){
//  if(e.toElement == this){
    console.log("clik");
    e.preventDefault();
    var x = e.offsetX;
    var y = e.offsetY;
    if(oldX == -1){
      oldX = x;
      oldY = y;
    }
    drawDaDot(e.offsetX, e.offsetY);
    drawDaLine(x, y, oldX, oldY);

    oldX = x;
    oldY = y;
  //}
};

var cwear = function(e){
  wyt = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  wyt.setAttribute("cx", "0");
  wyt.setAttribute("cy", "0");
  wyt.setAttribute("width", "500");
  wyt.setAttribute("height", "500");
  wyt.setAttribute("fill", "white");

  oldX = -1;

  pic.appendChild(wyt);
}
var clur = document.getElementById("clurrr");

clur.addEventListener("click", cwear);

pic.addEventListener("click", cwick);
