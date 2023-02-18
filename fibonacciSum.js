
function fibonacciSum(nbr) {

    let n1 = 0;
    let n2 = 1;
    let somme = 0;
    let sum=0;
  
    for(let i = 2; i <= nbr; i++){
       //somme des deux derniers nombres
       somme = n1 + n2; 
 
       //assigner la dernière valeur à la première
       n1 = n2; 
 
       //attribuer la somme au dernier
       n2 = somme; 

       if (somme % 2 == 0) {sum+=somme;}

    }
  
    return sum;
 }
 
 console.log(fibonacciSum(8));
 
 module.exports = fibonacciSum;