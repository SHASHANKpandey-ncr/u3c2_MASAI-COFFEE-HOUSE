// Add the coffee to local storage with key "coffee"
var arr=[]
const coffee_count = document.querySelector('#coffee_count');
var bucket_data=JSON.parse(localStorage.getItem('coffee')) || []

const menu = document.querySelector('#menu');
  async function get_menu(){
    try
  {
    let url='https://masai-mock-api.herokuapp.com/coffee/menu'
    let res =await fetch(url)
    let list=await res.json()
    console.log(list.menu.data)
    display(list.menu.data)
    arr.push(list.menu.data)
  }
  catch(error){console.log(error)}
}
get_menu()
// console.log(arr)
///////////////////////////////////// fetching url and getting data

function display(arr){
  arr.forEach(function(ele,i){
    const card = document.createElement('div');

    const image = document.createElement('img');
    image.src=ele.image

    const title = document.createElement('h2');
    title.innerText=ele.title

    const price = document.createElement('p');
    price.innerText=ele.price

    const button = document.createElement('button');
    button.innerText='Add to Bucket'
    button.setAttribute('id','add_to_bucket')

    button.addEventListener('click',function(event){
      bucket_data.push(ele)
      localStorage.setItem('coffee',JSON.stringify(bucket_data))
      window.location.reload()
    })
    
    card.append(image,title,price,button)
    menu.append(card)
  })
}

// display(list.menu.data)
console.log(bucket_data.length)
coffee_count.innerText=bucket_data.length
