
//get element
const currencyForm = document.getElementById ('currencyForm');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');

//form submit
currencyForm.onsubmit = (e) => {
    e.preventDefault();


//get value
 let amount = currencyForm.querySelector('input[name="amount"]');
 let currency = currencyForm.querySelector('select[name = "currency"]');
 

 if (amount.value == '' || currency.value == ''){
    msg.innerHTML = 'all field are required';
  }else{
   let rate = 0;
  switch(currency.value){
      case 'USD':
      rate = 89;
      break;

      case 'EURO':
      rate = 103;
      break;

      case 'EURO':
      rate = 103;
      break;
      
      case 'POUND':
      rate = 100;
      break;

      case 'CAD':
      rate = 65;
      break;

      case 'AUD':
      rate = 68;
      break;

      case 'BDT':
      rate = 1;
      break;

      case 'YEN':
      rate = 103;
      break;

      case 'YUAN':
      rate = 103;
      break;
  }
   //with decimal 
//   let final_amount = amount.value * rate; 

    //without decimal
    let final_amount = Math.round( amount.value * rate);
   
 details.innerHTML =  ` ${amount.value} ${currency.value} = 
 ${final_amount.toFixed(2)} Taka`;
}

} 