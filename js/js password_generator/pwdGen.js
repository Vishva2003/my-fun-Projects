const input = document.getElementById('input');
const showpwd = document.querySelector('.showpwd');
const numbers = document.querySelector('.number');
const charecters = document.querySelector('.charecter')
const symbols = document.querySelector('.symbols')


function generatePwd(){
    let output = "";
    let collection ="‎ ";
    const charecter='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const number="1234567890";
    const symbol = "!@#$%^&*()_+= {}[]|\\:;\"'<>,.?/`~-";

    const length = document.getElementById("length").value;

    if (!numbers.checked && !charecters.checked && !symbols.checked) {
        alert('Please! Select Checkboxes');
    }

    if (length<= 0){
        alert('Enter Range Between 1-16');
    }

    if (numbers.checked){
        collection += number;
        console.log("Number selected")
    }

    if (charecters.checked){
        collection += charecter;
        console.log("charecter selected")
    }

    if (symbols.checked){
        collection += symbol;
        console.log("Symbols selected")
    }
    
    if((length<=16) && (length> 0)){
        for (let i =0;i<length;i++){
            output+= collection.charAt(Math.floor(Math.random()*collection.length));
            showpwd.innerHTML=output;
        }
    }
}
