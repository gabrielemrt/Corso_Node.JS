// Scrivere una funzione che restituisca true se il parametro passato è y/yes oppure false se il parametro è n/no

var check = function(par) {

    switch(par) {
        case 'y':
            return true;
        case 'n':
            return false;
        default:
            return 'Non hai inserito un parametro corretto!'
    }
}

console.log('y = ' + check('y'));
console.log('n = ' + check('n'));
console.log('x = ' + check('x'));