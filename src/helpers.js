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

    console.log(totalQuantity);
    
    //Meses
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%
    // 36 = 25%
}