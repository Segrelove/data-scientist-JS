
function uberFactorial()
{
  let num = prompt("Quel est le numéro que tu veux factoriser?");
  num = Number(num);
  let iter = 1;
  for (var i = 2; i <= num; i++)
      iter = iter * i;
  return iter;
};

console.log(uberFactorial());