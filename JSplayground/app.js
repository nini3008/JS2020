function testVariableScope() {
  const name = "nick";
  console.log(name);
}

testVariableScope();

let name = " iloba  ";
console.log(name);

function reverseString(str, seperator) {
  return str.split(seperator).reverse().join(seperator);
}
