const TxtElement = [ 'Student of Computer and network Engineering',  'perosting handal']
let count = 0;
let txtIndex = 0;
let current = '';
let words = '';

(function ngetik(){

    if(count == TxtElement.length){
        count = 0
    }

    currentTxt = TxtElement[count]

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words .length ==currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500);

})();