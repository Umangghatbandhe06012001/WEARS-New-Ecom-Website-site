
const tbody = document.querySelector(".my_cart");
const my_cart = JSON.parse(localStorage.getItem("carts")) || [];
const empty_cart = document.querySelector("#empty_cart");
const non_empty_cart = document.querySelector("#carter");

document.addEventListener("DOMContentLoaded",()=>{
    // empty_cart.classList.remove("cart_move");
    
    if(my_cart.length === 0){
    
       
        non_empty_cart.style.display = "none";
        empty_cart.style.display = "block"; 
        image_move.classList.add("cart_move");
    }else{
        image_move.classList.remove("cart_move");
        non_empty_cart.style.display = "block";
        empty_cart.style.display = "none";  
    }
});



const image_move = document.querySelector('.cart_image');




for (let i = 0; i < my_cart.length; i++) {
    const row = document.createElement("tr");
    const item = my_cart[i];
    const data = JSON.parse(item);
    row.setAttribute("id",`${data.id}`);
    row.setAttribute("class","rw")
    row.innerHTML = data.html_in;
    tbody.appendChild(row);
}






const deleteBtns = document.querySelectorAll(".cross");
let ct = JSON.parse(localStorage.getItem("carts"));
console.log(localStorage.getItem("carts"));


for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
        let row = deleteBtns[i].parentElement.parentElement; 

        const curr = deleteBtns[i].parentElement.parentElement;
       
        
        const cartdelete = ct.filter((item) => {
         
            let dt = JSON.parse(item);
            return dt.id != curr.getAttribute("id");
        });

        localStorage.setItem("carts",JSON.stringify(cartdelete));
        
        tbody.removeChild(row);
        location.reload();
    });
}

const subTotalElement = document.querySelector('.sub_t');
const amountElement = document.querySelector('.amount');


const Qnty = document.querySelectorAll(".Quantity");
const price = document.querySelectorAll(".price");



document.addEventListener('DOMContentLoaded', function () {
    // This code will run when the DOM content is fully loaded
    
    // const Qnty = document.querySelectorAll(".Quantity");
    // const price = document.querySelectorAll(".price");
    let m_paid = 0;

    function updateTotal() {
        m_paid = 0;
        for (let i = 0; i < Qnty.length; i++) {
            let val = Qnty[i].value;
            const numericValue = parseInt((price[i].textContent).replace(/\D/g, ''), 10);
            m_paid += val * numericValue;
        }

        subTotalElement.textContent = `$${m_paid}`;
        amountElement.textContent = `$${m_paid}`;
    }

    // Initial update when the page is loaded
    updateTotal();

    // Add input event listener to update total when input changes
    Qnty.forEach(function (input) {
        input.addEventListener('input', updateTotal);
    });
});


coupon_codes = ["OFF50","OFF35"];

const couponVal = document.querySelector("#coupon_val");
const couponbtn = document.querySelector("#apply");
const hurray = document.querySelector("#hurray");




couponbtn.addEventListener("click",()=>{
    let Cval = couponVal.value;
    let payment = parseInt((subTotalElement.textContent).replace(/\D/g, ''), 10);
    let id1 = 0;
    let id3 = 0;
   
    if(coupon_codes.includes(`${Cval}`)){
        if(Cval == "OFF50"){
            if(payment > 2000){
                let final_pay = payment*0.5;
                amountElement.textContent = `$${final_pay}`;
               
                hurray.style.display = "block";
                
                id1 = setTimeout(()=>{
                    hurray.style.display = "none";
                },3000);
                
                
                
            }else{
                alert("Amount should be greater than $2000 to be applicable for this coupon!")
                return;
            }
        }
        if(Cval == "OFF35"){
            let final_pay = payment*0.65;
            amountElement.textContent = `$${Math.ceil(final_pay)}`;
           
            hurray.style.display = "block";
          
            id3 = setTimeout(()=>{
                hurray.style.display = "none";
            },3000);
         
           
            
        }
    }else {
        alert("Invalid Coupon");
    }
});





