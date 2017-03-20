/*Your task is to create a function - basic_op().
The function should take three arguments -
operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying
the chosen operation.*/
function basicOp(operation, value1, value2)
{
  if(operation === '+') return value1 + value2;
  else if(operation === '-') return value1 - value2;
  else if(operation === '*') return value1 * value2;
  else if(operation === '/') return value1 / value2;
  else return 0;
}
