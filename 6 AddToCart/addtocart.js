const product = [
    {
        id: 0,
        image: 'image/mobile.jpg',
        title: 'Galaxy S22 Ultra',
        price: 150,
    },
    {
        id: 1,
        image: 'image/airpod.jpg',
        title: 'Air Pod Pro',
        price: 50,
    },
    {
        id: 2,
        image: 'image/dslr.jpg',
        title: '250D DSLR Camera',
        price: 120,
    },
    {
        id: 3,
        image: 'image/headphone.jpg',
        title: 'Head Phones',
        price: 60,
    }
];

// product
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'> 
            <p>${title}</p>
            <h2>$ ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')


    
    var cart =[];
    // push the product displaycart
    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    // delete
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    // displaycart
    function displaycart(a){
        let j=0, total=0 ;
        
        // count
        document.getElementById("count").innerHTML=cart.length;

        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";

              // current price
            document.getElementById("total").innerHTML="$ " +0+ ".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {

                var {image, title, price}= items;
                // calculate price 
                total = total+price;
                document.getElementById("total").innerHTML="$ "+total+".00";
                return(
                    `<div class='cart-item'>
                        <div class='row-img'>
                            <img class='rowimg' src=${image}>
                        </div>
                        <p style='font-size:12px;'>${title}</p>
                        <input type="number" value="1" class="cart-quantity">
                        <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                        "<i class='fa-solid fa-trash' onclick = 'delElement("+(j++) +")'></i></div>"
                );
            }).join('');
        }
    }

    // alert
    document.getElementById("buynow").addEventListener("click" , alertfun)
    function alertfun(){
        alert("Order Place");
    }
