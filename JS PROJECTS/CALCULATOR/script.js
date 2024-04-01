function addTodisplay(value){
    document.getElementById("displyforres").value += value;
}

function clearDisplay(){
    document.getElementById("displyforres").value = '';
}

function toCalculate(){
    var displayvalue = document.getElementById("displyforres").value;
    var result = eval(displayvalue);
    document.getElementById("displyforres").value = "="+result;
}

function backspace(){
    var display = document.getElementById("displyforres");
    display.value = display.value.slice(0,-1);
}