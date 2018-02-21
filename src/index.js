module.exports = function solveEquation(equation) {
  var a = +(equation.substring(0, equation.indexOf('*')-1)).replace(/\s+/g, '');
  var b = +(equation.substring(equation.indexOf('^2')+2, equation.indexOf('*', equation.indexOf('^2'))-1)).replace(/\s+/g, '');
  var c = +(equation.substring(equation.indexOf('x', equation.indexOf('^2'))+1)).replace(/\s+/g, '');

  var D = Math.pow(b,2) - 4*a*c;
  var res =[];
  
  if (D>0){
    res.push(Math.round(((-b)+Math.sqrt(D))/(2*a)));
    res.push(Math.round(((-b)-Math.sqrt(D))/(2*a)));
	res.sort(function(a,b) {return a - b; });
  }

  return (res);
}
