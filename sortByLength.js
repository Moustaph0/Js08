
const months = ['Court', 'Longlong', 'Court'];

function sortByLength(tab){

    tab.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
    for(let i=0;i<tab.length;i++){
        console.log(tab[i]);
    }

}
sortByLength(months);

module.exports = sortByLength;