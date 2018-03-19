var cupsToTbs = function(cups){
  return cups * 16;
}

var tbsToTsp = function(tbs){
  return tbs * 3;
}

var cupsToTsp = function(cups){
  return tbsToTsp(cupsToTbs(cups));
}
var convert = parseInt(prompt("How many cups do you have?"));
// var convert = parseInt(prompt("How many tablespoons do you have?"));

// alert(cupsToTbs(convert));
// alert(tbsToTsp(convert));
alert(cupsToTsp(convert));
