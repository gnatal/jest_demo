let acumulated = 0;

function acc (value){
    acumulated += value;
    return acumulated;
}

function clear(){
    acumulated = 0;
}

module.exports ={
    acc,
    clear
}