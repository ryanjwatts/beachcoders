
$().ready(function () {
    $("#me-r, #me-p, #me-s").on("click", showHand);
    
    function showHand(event) {
        const targetElement = event.target;
        changeClass(targetElement);
        
        const mevalue = setMeValue(targetElement);
        const compvalue = calculateComp();
        displayWinner(mevalue, compvalue);
        displayMessage(mevalue, compvalue);
    }

    function changeClass(element) {
        element.className = element.className === 'button clicked' ? 'button' : 'button clicked';
    }

    function setMeValue(element) {    
        if (element.id === 'me-r') return 0;
        else if (element.id === 'me-p') return 1; 
        else return 2;
    }

    function calculateComp() {
        return Math.floor(Math.random() * 3); 
    }

    function displayWinner(me, comp) {
        console.log('testing...', comp, '. You got...', me, '. YOU ARE THE WINNER!!!');
    }

    function displayMessage(me, comp) {
        const disDiv = document.getElementById("display");
        const messageText = ('Computer got...' + comp + '. You got...' + me + '. YOU ARE THE WINNER!!!');
        console.log(messageText);
        disDiv.innerText = messageText;
    }    
    

});
