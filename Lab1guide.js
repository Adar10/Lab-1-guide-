

function biggie_size(n){ 
    return n === 1
    ? 5 : n === 2
    ? 6 : n === 3
    ? 7 : n === 4
    ? 8 : 'Not on the menu';
}

function unbiggie_size(n){ 
    return n === 5
    ? 1 : n === 6
    ? 2 : n === 7
    ? 3 : n === 8
    ? 4 : 'Not on the menu';
}

function is_biggie_size(n){
    return n > 4 ? true : false;
}


function combo_price(n){
    return n < 5 ? n * 1.17 : n * 1.17 + 0.50;
    
}
function add_to_order(n, x){
    const jump =  n + x;
    return jump;
}
add_to_order(1,2);



function last_combo(n){
    return n % 10;
}

function other_combos(n){
    return (n - (n % 10)) / 10 ;
}
