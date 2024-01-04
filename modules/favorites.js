// // funkcija sukurti favorites 

export function addFavorites(className) {

    let cards = Array.from(document.getElementsByClassName(className))  
    cards.forEach(card => {
        const heart = document.createElement("i")
        heart.setAttribute("class", "fa fa-heart")
        heart.setAttribute("id", `${card.id}`)
        heart.style.position = "absolute"
        heart.style.top = "3%"
        heart.style.right = "3%"
        heart.style.fontSize = "40px"
  
        card.append(heart)
    })
  
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const sortByNumber = (a, b) => (Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]))  
    const allHearts = document.querySelectorAll("i")
  
    allHearts.forEach((heart) => {
        const heartId = heart.getAttribute("id")
        if (favorites.includes(heartId)) {
            heart.style.color = "red"
            heart.style.opacity = "90%"
        } else {
            heart.style.color = "white"
            heart.style.opacity = "30%"
        }
        heart.addEventListener("click", (event) => {
            event.preventDefault()
            if (favorites.includes(heartId)) {
                heart.style.color = "white"
                heart.style.opacity = "30%"
                favorites = favorites.filter(id => id !== heartId);
            } else {
                heart.style.color = "red"
                heart.style.opacity = "90%"
                favorites.push(heartId);
            }
            if (favorites.length === 0) {
                localStorage.removeItem("favorites")
            } else {
                localStorage.setItem('favorites', JSON.stringify(favorites.sort(sortByNumber)));
            }
        })
    })
  }