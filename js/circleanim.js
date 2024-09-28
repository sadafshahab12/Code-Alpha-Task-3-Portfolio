const pCircles = document.querySelectorAll(".p-circle");
pCircles.forEach((points) => {
  let dots = points.getAttribute("data-dots");
  let marked = points.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);

  let proPoint = "";
  let rotatePoints = 360 / dots;

  for (let i = 0; i < dots; i++) {
    proPoint += `  <div class="points" style="--i:${i}; --rot:${rotatePoints}deg"></div>`;
  }
  points.innerHTML = proPoint;
  const pointsMarked = points.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});


