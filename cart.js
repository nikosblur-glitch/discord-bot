```javascript
function addToCart(
    name,
    price
) {

    let cart =
        JSON.parse(
            localStorage.getItem(
                "cart"
            )
        ) || [];


    cart.push({

        id:
        Date.now(),

        name:
        name,

        price:
        Number(price)

    });


    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );


    alert(
        name +
        " was added to your cart!"
    );


    window.location.href =
        "cart.html";

}


function getCart() {

    return JSON.parse(

        localStorage.getItem(
            "cart"
        )

    ) || [];

}


function clearCart() {

    localStorage.removeItem(
        "cart"
    );

}
```
