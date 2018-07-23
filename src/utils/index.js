export const getDiscountedPrice =(regular_price, units_sold)=>{
  if(units_sold<=10){
    return regular_price*0.95
  }
  if(units_sold<=20){
    return regular_price*0.90
  }
  if(units_sold<=30){
  return regular_price*0.85
 }
return regular_price*0.80
 }
