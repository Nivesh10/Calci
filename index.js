let inputBtn = document.getElementById('input-screen');

 function display(num){
    inputBtn.value+= num;
}

function calculate(){
    try{
        inputBtn.value= eval(inputBtn.value);
    }
    catch(error){
        alert("invalid");
    }
}

function del(){
    inputBtn.value=inputBtn.value.slice(0,-1);
}

function clearInput() {
    inputBtn.value= '';
}