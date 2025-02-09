function input(num){
   let res = document.getElementById('out');
    res.value += num;
    
}
function res(){
    let res = document.getElementById('out');
    res.value = eval(res.value);
    return res.value;
}
function res1(){
    let res = document.getElementById('out');
    res.value = eval(res.value);
    return res.value;
}

function remove(){
    let res = document.getElementById('out');
    res.value = "";
    return res.value;
}
function back(remove){
    let number = document.getElementById('out');
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove;
    return number.value;
}
