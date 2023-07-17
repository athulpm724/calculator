function clearall(){
    disp.value="";
}

function ddata(num){
    disp.value+=num;
}

function calcdata(){
    disp.value=eval(disp.value);
}

function clear1(){
    disp.value=disp.value.slice(0,-1);
}