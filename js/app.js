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
    console.log(generatePin());
})