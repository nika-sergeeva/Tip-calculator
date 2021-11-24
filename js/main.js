const bill        = document.querySelector('#bill');
const custom      = document.querySelector('#custom');
const people      = document.querySelector('#peope');

let theValue = 0;

const btns        = document.querySelectorAll('.calc-count__tip-btn');
const reset       = document.querySelector('.calc-output__btn');
const tipAPerson  = document.getElementById('tipPerPerson');
const totalAmount = document.getElementById('totalEach');


function tipCalculator(){
  tip = (theValue / 100) * +bill.value;
  total = +bill.value + tip;
  tipPerPerson = (tip / +people.value).toFixed(2);
  totalPerPerson = (total / +people.value).toFixed(2);
  tipAPerson.innerHTML = "$" + tipPerPerson;
  totalAmount.innerHTML = "$" + totalPerPerson;
}

btns.forEach((btn,index) => {
  btn.addEventListener('click',()=>{
      custom.value = "";
      theValue = btn.value;
      tipCalculator();
      
      btns.forEach((btn,indexA)=>{
          if(index === indexA){
              btn.classList.add('active');
          }else{
              btn.classList.remove('active');
          }
      })
  })   
})


bill.addEventListener('keyup',()=>{
  tipCalculator();
})

people.addEventListener('keyup', ()=>{
  if((bill.value != "" | bill.value != null) && (theValue))
  tipCalculator();
})

custom.addEventListener('keyup', ()=>{
  theValue = custom.value;
  btns.forEach(btn => {
      btn.classList.remove('active');
  })
  tipCalculator();    
})


reset.addEventListener('click', ()=>{
  theValue = "";
  bill.value = "";
  custom.value = "";
  people.value = "";
  btns.forEach(btn => {
      btn.classList.remove('active');
  })
  tipAPerson.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
})


