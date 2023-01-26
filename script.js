function inflationCalculator(){
    var inflationRate = document.querySelector('#inflationRate');
    var money = document.querySelector('#money');
    var years = document.querySelector('#years');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    //formula
    let worth = money +(money+(inflationRate/100));

    for(var i = 1; i<years;i++){
        worth+=worth*(inflationRate/100);
    }

    worth = worth.toFixed(2);

    var newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = 'Current ' + money + '€ worth the same as ' + worth + '€ for ' + years + ' years.'

    document.querySelector('.container').appendChild(newElement);
}