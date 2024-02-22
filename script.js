// Esercizio1

function crazySum (num1,num2){
    if (num1===num2) {
        return (num1+num2)*3;
    }else{
        return num1 + num2;
    }
}

console.log(crazySum(2,2));    


// Esercizio 2


function boundary(numero){
    let intero = parseInt(numero)
    if ((numero > 20 &&  numero <= 100 )|| numero ===400 ){
        return true;
    }else{
        return false;
    }
}

// ESERCIZIO 3

let codify1 = function (str) {
    if (str.startsWith('code')) {
      return str
    } else {
      return 'code ' + str
    }
  }
  console.log(codify1('coders'))
  console.log(codify1('Hello'))



 

//EXTRA 1

let area = function (l1, l2) {
    return l1 * l2
  }
  let areaResult = area(3, 4)
  console.log(areaResult)



  //EXTRA 2


const crazyDiff = function (num) {
    if (num > 19) {
      return Math.abs(num - 19) * 3
    } else {
      return Math.abs(num - 19)
    }
  }
  // const crazyDiff = (num) =>
  // num > 19 ? Math.abs(num - 19) * 3 : Math.abs(num - 19);
  console.log(crazyDiff(3))





//ESERCIZIO EXTRA 3


function codify(stringa){
    if(stringa.startsWith("code")){
        return stringa;
    }else{
        return "code " + stringa;
    }
}


console.log(codify("coders"));
console.log(codify("banane"));


// ESERCIZIO EXTRA 4


function check3and7(num){
    if (num >=0  && (num % 3 === 0 ) || (num % 7 === 0)){
        return true;
    }else{
        return false;
    }

}

console.log(check3and7(13));



// ESERCIZIO EXTRA 5 


let cutString = function (stringa) {
    return stringa.slice(1, stringa.length -1)
}   
  console.log(cutString('Scimmia'))
