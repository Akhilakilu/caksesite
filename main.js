let carts=document.querySelectorAll('.add-cart');
let cartItems=localStorage.getItem("productsInCart");

    cartItems=JSON.parse(cartItems)
let products=[
    {   id:100,
        name:'BLUEBERRY',
        tag:'blueberry',
        price:800,
        inCart:0
    },
    {   id:101,
        name:'cake1',
        tag:'cake1',
        price:900,
        inCart:0
    },
    {   id:102,
        name:'cake2',
        tag:'cake2',
        price:1000,
        inCart:0
    },
    {   id:103,
        name:'mango',
        tag:'mango',
        price:1000,
        inCart:0
    },
    {  id:104,
        name:'peanut',
        tag:'peanut',
        price:1300,
        inCart:0
    }
];
for(let i=0;i< carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}



function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector(".cart span").textContent=productNumbers;

    }
}

 function cartNumbers(product){
      console.log('hai'); 
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1


    }
    else{
        localStorage.setItem('cartNumbers',1)
        document.querySelector('.cart span').textContent=1
     }
     setItem(product)
}
function setItem(product){
    let cartItems=localStorage.getItem('productsInCart')
     cartItems=JSON.parse(cartItems)
     if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
            ...cartItems,
            [product.tag]:product
            }
        }
     
     cartItems[product.tag].inCart+=1;
    }
     else
     {
        product.inCart=1;
        cartItems={
            [product.tag]:product
        }

     }
   
    localStorage.setItem("productsInCart",JSON.stringify(cartItems))
   
}
function totalCost(product){
    let cartCost=localStorage.getItem('totalCost')
    // localStorage.setItem("totalCost",product.price);
    if(cartCost!=null){
        cartCost=parseInt(cartCost)
        localStorage.setItem('totalCost',cartCost+product.price)
    }
    else{
        localStorage.setItem('totalCost',product.price)
    }
}

function displayCart(){
    let cartItems=localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems)
    let productContainer=document.querySelector(".products")
    let cartCost=localStorage.getItem('totalCost')

    if(cartItems && productContainer){
        productContainer.innerHTML=''
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML+=
           ` 
            <div class="product">
            <i class="bi bi-cart-fill"></i>
        <span>${item.name}</span></div>
        <div class="price">Rs.${item.price}</div>
        <div class="quantity">
        <span id="quantity">${item.inCart}</span>
</div>
 <div class="total">rs.${item.inCart*item.price}.00</div> 
 `
        });
        productContainer.innerHTML+=`<div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total</h4>
        <h4 class="basketTotal">
        ${cartCost}</h4> 
        `;
    }
   

}
function changeNumberofUnits(action,id){
     let cartItems=localStorage.getItem("productsInCart");
         cartItems=JSON.parse(cartItems)
    
        cart=Object.values(cartItems).map((item)=>{
            let oldNumber=item.inCart
            console.log('itemsid',item.id);
            if(item.id===id){
                        console.log('id',id);
                        if(action==="minusButton" && oldNumber>1){
                            oldNumber--;
                            console.log('minus',oldNumber);
                        }else if(action==="plusButton"){
                            console.log('plus1',oldNumber);

                            oldNumber++;
                            console.log('plus',oldNumber);
                        }
                    }
                    return{
                        ...item,
                        oldNumber,
                    }
        })
        updateCartItems()
    }
    function updateCartItems(){
        displayCart();
        totalCost();
    }
    function removeCart(id){
        console.log("inside remove",id);
        let cartItems=localStorage.getItem("productsInCart");
         cartItems=JSON.parse(cartItems)
    
        Object.values(cartItems).filter((item)=>{
            console.log("itemmapid",item.id);
          item.id!==id
          console.log(id);
        })
    }
 onLoadCartNumbers()
  displayCart()