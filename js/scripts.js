//USER INTERFACE LOGIC
function splitString(stringToSplit, separator) {
  return myTriangle= parseInt(stringToSplit.split(separator));
}
  
  //BUSINESS LOGIC
function triangleTracker(){
  var triangleSides = document.getElementById("tSides").value;
  var comma = ",";
  splitString (triangleSides,comma);
  if ((myTriangle[0] + myTriangle[1] <= myTriangle[2]) || (myTriangle[1] + myTriangle[2] <= myTriangle[0]) || (myTriangle[2] + myTriangle[0] <= myTriangle[1])) {
    alert('This is not a triangle.');
  } else if ((myTriangle[0] === myTriangle[1]) && (myTriangle[1] === myTriangle[2]) && (myTriangle[0] === myTriangle[2])) {
    alert('This is an equilateral triangle. All sides are equal');
  } else if ((myTriangle[0] === myTriangle[1]) || (myTriangle[1] === myTriangle[2]) || (myTriangle[0] === myTriangle[2])) {
    alert('This is an isosceles triangle. Two sides are equal.');
  } else if ((myTriangle[0] + myTriangle[1] > myTriangle[2]) || (myTriangle[1] + myTriangle[2] > myTriangle[0]) || myTriangle[2] + myTriangle[0] > myTriangle[1]){
  	 alert('This is a scalene triangle.');
  }
};
  