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
        alert('pasirink bent 1 patiekala')
    }
});


