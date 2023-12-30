// funkcija sukurti kortele

function generateCard(id) {
  const card = document.getElementById(id);
  card.innerHTML = `
    <div class="card mb-3 text-white" style="background-color: rgba(0, 0, 0, 0.7);">
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

generateCard("card1");
generateCard("card2");
generateCard("card3");
generateCard("card4");
