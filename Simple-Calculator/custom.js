const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');

const clearDisplay = () =>{
    display.value = "";
}

const deleteDisplay = () => {
    display.value = display.value.slice(0, -1);
}

const calculate = () => {
    try{
        display.value = eval(display.value);
    }catch(e){
        display.value = "Error";
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click",() => {
        const value = btn.value;

        switch (value) {
            case "AC":
                clearDisplay();
                break;

            case "DEL":
                deleteDisplay();
                break;

            case "=":
                calculate();
                break;
        
            default:
                display.value += value;
        }
    })
});