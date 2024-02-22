const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
let res;

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = ((9 * temp) / 5) + 32;
        result.textContent = temp.toFixed(2) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        res = ((temp - 32) * 5) / 9;
        result.textContent = res.toFixed(2) + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
}