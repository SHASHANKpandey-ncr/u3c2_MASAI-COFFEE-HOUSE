const button = document.querySelector('button');
button.addEventListener('click',function(){

  setTimeout(function(){
    alert('Your order is accepted')
  },0000)
  setTimeout(function(){
    alert('Your order is being Prepared')
  },3000)
  setTimeout(function(){
    alert('Your order is being packed')
  },8000)
  setTimeout(function(){
    alert('Your order is out for delivery')
  },10000)
  setTimeout(function(){
    alert('Order delivered')
  },12000)
})

