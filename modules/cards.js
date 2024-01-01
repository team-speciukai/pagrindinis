// funkcija sukurti kortele

function generateCard(id, className) {
  const card = document.getElementById(id);
  card.innerHTML = `
    <div class="card mb-3 text-white ${className}" style="background-color: rgba(0, 0, 0, 0.7);">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Patiekalas</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus error quidem animi et! Accusantium accusamus reiciendis hic earum quisquam!</p>
            <p class="card-text"><small class="text-white">Kaina</small></p>
          </div>
        </div>
      </div>
    </div>
    `;
}

generateCard("card1", "breakfast");
generateCard("card2", "breakfast");
generateCard("card3", "breakfast");
generateCard("card4", "breakfast");

generateCard("card5", "lunch");
generateCard("card6", "lunch");
generateCard("card7", "lunch");
generateCard("card8", "lunch");

generateCard("card9", "dinner");
generateCard("card10", "dinner");
generateCard("card11", "dinner");
generateCard("card12", "dinner");

generateCard("card13", "drinks");
generateCard("card14", "drinks");
generateCard("card15", "drinks");
generateCard("card16", "drinks");

generateCard("card17", "deserts");
generateCard("card18", "deserts");
generateCard("card19", "deserts");
generateCard("card20", "deserts");
