
function primeSum(nbr) {


    let x=2, estPremier, cmpt=0;
do{
        estPremier=0;
        for(i=2;i<=x/2;i++){
            if(x%i==0){
                estPremier=1;
                break;
            }
        }
    if(estPremier==0){
        cmpt+=x;
    }
    x++
} while(x<nbr);
return cmpt;
}

console.log(primeSum(2000000));

module.exports = primeSum;
    