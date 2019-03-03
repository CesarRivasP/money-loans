export const calculateTotal = (quantity, term) => {
    console.log('Desde helpers');
    
    let totalQuantity;
    
    //  Cantidades
    if(quantity <= 1000){
      // De 0 a 1000 = 25%
      totalQuantity = quantity * .25;
    }
    else if(quantity > 1000 && quantity <= 5000){
      // De 1001 a 5000 = 20%
      totalQuantity = quantity * .20;
    }
    else if(quantity > 5000 && quantity <= 10000){
      // De 5001 a 10000 = 15%
      totalQuantity = quantity * .15;
    }
    else {
      // + 10001 = 10%
      totalQuantity = quantity * .10;
    }

    // console.log(totalQuantity);
    
    let totalTerm;
    //Meses
    switch (term) {
      case 3:
        // 3 = 5%
        totalTerm = quantity * .05;
        break;
      case 6:
        // 6 = 10%
        totalTerm = quantity * .10;
        break;
      case 12:
        // 12 = 15%
        totalTerm = quantity * .15;
        break;
      case 24:
        // 24 = 20%
        totalTerm = quantity * .20;
        break;
      case 36:
       // 36 = 25%
        totalTerm = quantity * .25;
        break;
      default:
        break;
    }

    //console.log(totalTerm);

    let total;
    total = quantity + totalQuantity + totalTerm;

    //console.log(total);

    return total; 
}