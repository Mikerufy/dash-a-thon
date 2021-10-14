export const getImg =()=>fetch('http://localhost:5000/')
.then(res=>res.json());

export const addProductForm =(prod)=>fetch('http://localhost:5000/user/add-product',{
    method:'POST',
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
       
    },
    body:JSON.stringify(prod)
})

export const getProductForm =()=>fetch('http://localhost:5000/user/get-product')
.then(res=>res.json());




// export const addItemToCart =(prod)=>fetch('http://localhost:5000/customer/add-to-cart',{
//     method:'POST',
//     headers:{
//         "Accept":"application/json",
//         "Content-Type":"application/json",
       
//     },
//     body:JSON.stringify(prod)
// })
// export const getCart =()=>fetch('http://localhost:5000/customer/cart')
// .then(res=>res.json());