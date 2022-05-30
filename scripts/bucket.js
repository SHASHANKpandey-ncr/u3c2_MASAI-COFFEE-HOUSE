// On clicking remove button the item should be removed from DOM as well as localstorage.

const bucket = document.querySelector('#bucket');
const total_amount = document.querySelector('#total_amount');
var bucket_data=JSON.parse(localStorage.getItem('coffee')) || []
var count=0;
function display(arr){
  arr.forEach(function(ele,i){
    const card = document.createElement('div');

    const image = document.createElement('img');
    image.src=ele.image

    const title = document.createElement('h2');
    title.innerText=ele.title

    const price = document.createElement('p');
    price.innerText=ele.price
    count=count+ele.price;
    const button = document.createElement('button');
    button.innerText='remove coffee'
    button.setAttribute('id','remove_coffee')

    button.addEventListener('click',function(event){
      del(i)
    })
    
    card.append(image,title,price,button)
    bucket.append(card)
  })
}

display(bucket_data)
total_amount.innerText=count;

function del(i){
  var bucket_data=JSON.parse(localStorage.getItem('coffee')) || []
  let new_bucket_data=bucket_data.filter(function(ele,index){
    return index!==i;
  })
localStorage.setItem('coffee',JSON.stringify(new_bucket_data))
display(new_bucket_data)
window.location.reload()
}

