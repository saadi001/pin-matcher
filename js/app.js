function generatePin(){
    const random = Math.round(Math.random()*10000);
    const pinString = random +'';
    if(pinString.length === 4 ){
        return random;
    }
    else{ 

        return generatePin();
    }
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = generatePin();

    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const typedNumber = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typedNumberField.value;

    if(isNaN(typedNumber)){
        if(typedNumber === 'C'){
            typedNumberField.value = '';
        }
        else if(typedNumber === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypeNumber + typedNumber;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const generatedPin = document.getElementById('display-pin');
    const generatedPinValue = generatedPin.value;

    const typedPin = document.getElementById('typed-numbers');
    const typedPinvalue = typedPin.value;

    const pinSuccessMessage = document.getElementById('seccess-notify');
    const pinErrorMessage = document.getElementById('error-message');
    
    if(generatedPinValue === typedPinvalue){
        
        pinSuccessMessage.style.display = 'block';
        pinErrorMessage.style.display = 'none';
    }
    else{
        
        pinErrorMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }

})