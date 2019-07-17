const Pi = 3.141592;


function CalculatePaintNeeded(paintPerUnit, radius) {
  // rename symbol
  // extract constant
  // extract method



  var area;
  area = CircleArea(radius);

  return area / paintPerUnit;

}

function CircleArea(radius) {
  return Pi * radius * radius;
}

function ReDrawChangedElements() {
  // similar code here
  var radius = 50;
  var area;
  area = CircleArea(radius);

}
