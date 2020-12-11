
function reverseString(str, seperator) {
  return str.split(seperator).reverse().join(seperator);
}


//hackerrank JS questions

//  Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

function factorial(n){
  if(n < 0){
    return -1;
  } else if(n == 0){
    return 1;
  } else{
    return(n * factorial(n - 1))
  }
}

// Let and Const

function letConst (){
    const PI = Math.PI
    let r = +(readLine())

    let area = PI * Math.pow(r, 2);
    console.log(area);

    let perimeter = 2 * PI * r;
    console.log(perimeter);
}

//Arrays left rotation

function rotLeft(d, arr){
  while(d--){
    const shift = arr.shift()
    arr.push(shift);
  }
  return arr;
}