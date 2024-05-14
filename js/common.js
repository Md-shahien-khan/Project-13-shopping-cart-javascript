function getTextElementValueById(elementId){
    const itemTotalElement = document.getElementById(elementId);
    const currentItemTotalString = itemTotalElement.innerText;
    const currentItemTotal = parseInt(currentItemTotalString);
    return currentItemTotal;

}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    
    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(3);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);


    const finalAmount = currentSubTotal + taxAmount; 
    setTextElementValueById('final-total', finalAmount);
     
}