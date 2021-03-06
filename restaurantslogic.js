let ul = document.querySelector("#restList");
render = false;

document.querySelector("#health").addEventListener("click", () => {
  render = true;
  allRestaurants.sort((a, b) => b.healthLevel - a.healthLevel);
  for (item of document.querySelectorAll("li")) {
    item.remove();
  }
  for (btn of document.querySelectorAll("button")) {
    btn.classList.remove("selected");
  }
  document.querySelector("#health").classList.toggle("selected");
  renderRest();
});

document.querySelector("#money").addEventListener("click", () => {
  render = true;
  allRestaurants.sort((a, b) => a.expenseRating - b.expenseRating);
  for (item of document.querySelectorAll("li")) {
    item.remove();
  }
  for (btn of document.querySelectorAll("button")) {
    btn.classList.remove("selected");
  }
  document.querySelector("#money").classList.toggle("selected");

  renderRest();
});

document.querySelector("#distance").addEventListener("click", () => {
  render = true;
  allRestaurants.sort((a, b) => a.distance - b.distance);
  for (item of document.querySelectorAll("li")) {
    item.remove();
  }
  for (btn of document.querySelectorAll("button")) {
    btn.classList.remove("selected");
  }
  document.querySelector("#distance").classList.add("selected");

  renderRest();
});

const renderRest = () => {
  allRestaurants.map(({ name, distance, expenseRating, healthLevel, id, image}) => {
    li = document.createElement("li");
    li.classList.add("restaurant");
    li.innerHTML = `
		  <!-- <div class="image" style="background-image: url(${image}); background-size: 100% 100%;" ;> -->
      <h1 style="margin: 0;"> ${name} </h1>
      <a href="components/restaurant${id}.html">
        <div class="image" style="background-image: url(${image});"></div>
      </a>
      <div class="description";>
        <h4> HealthMeter:${healthLevel} </h4>
        <h4> Distance:${distance}km </h4>
        <h4> MoneyRate:${expenseRating} </h4>
      </div>
        `;
    ul.appendChild(li);
  });
};

if (!render) {
  renderRest();
}

let restaurants = document.querySelectorAll(".restaurant");

for (res of restaurants) {
  res.addEventListener("click", ()=> {
  })
}
