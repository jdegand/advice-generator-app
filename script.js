(function() {

    const slipId = document.getElementById('slipId');

    const slipAdvice = document.getElementById('slipAdvice');

    const diceButton = document.getElementById('diceButton');

    function getQuote(){
        fetch('https://api.adviceslip.com/advice')
        .then(response=>response.json())
        .then(data => {
            slipId.innerText = data.slip.id;
            slipAdvice.innerText = data.slip.advice;
        });
    };

    diceButton.addEventListener('click', getQuote);

    document.addEventListener('DOMContentLoaded', ()=> {
        diceButton.click();
    })
 
})();