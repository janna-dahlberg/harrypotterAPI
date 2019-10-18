async function getData() {
  let response = await fetch(
    "http://hp-api.herokuapp.com/api/characters/students"
  );
  let responseBody = await response.json();
  return responseBody;
}

async function render() {
  let list = await getData();
  let ul = document.querySelector("ul");
  let itemHidden = document.querySelector("li.hidden");

  for (let item of list) {
    let newItem = itemHidden.cloneNode(true);
    newItem.classList.remove("hidden");

    newItem.addEventListener("click", function() {
      let sname = document.querySelector(".student-name");
      sname.innerText = item.name;
      let sInfo = document.querySelector(".student-info");
      sInfo.innerText = item.house;
      let sImage = document.querySelector(".student-img");
      sImage.classList.remove("hidden");
      sImage.src = item.image;
      let actor = document.querySelector(".actor");
      actor.innerText = item.actor;
      let sbg = document.querySelector("article");

      if (item.house === "Gryffindor") {
        sbg.style.backgroundImage = "url('img/gryffindor.jpg')";
        actor.style.color = "#ae8d11";
      } else if (item.house === "Slytherin") {
        sbg.style.backgroundImage = "url('img/slytherin.jpg')";
        actor.style.color = "#516320";
      } else if (item.house === "Hufflepuff") {
        actor.style.color = "#ae8d11";
        sbg.style.backgroundImage = "url('img/hufflepuff.jpg')";
      } else {
        sbg.style.backgroundImage = "url('img/ravenclaw.jpg')";
        actor.style.color = "#aa7f4f";
      }
    });

    let p = newItem.querySelector("p");
    p.innerText = item.name;

    ul.append(newItem);
  }
}

render();
