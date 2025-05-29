function addToCart1(){
    let name = document.querySelector(".name1").textContent;
    let price = document.querySelector(".price1").textContent;

    console.log(name, price);

    




const h3 = document.querySelector('.price h3');


const fullText = h3.textContent;    


const saleText = h3.querySelector('.sale-price').textContent;

    


    

    let tableBody = document.querySelector("#cartTable tbody");
    let newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = price;


} 
