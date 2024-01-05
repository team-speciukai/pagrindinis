const modal = document.getElementById("modalContainer");
// console.log(modal);
const openModal = document.querySelector("#cart")

openModal.addEventListener('click', ()=>{
    const storedData = localStorage.getItem('totalItems')
    // console.log(storedData)
    const totalItems = JSON.parse(storedData) ||  [];
    // console.log(totalItems)
    
    if(totalItems.length > 0){
        modal.style.display = "block"
    } else if (totalItems.length === 0){
        alert('Pasirinkite bent vieną patiekalą')
    }
});

const orderButton = document.getElementById("orderButton");

orderButton.addEventListener('click', ()=>{
    localStorage.removeItem('totalItems');
    localStorage.removeItem('counts');
    modal.style.display = "none";
});
