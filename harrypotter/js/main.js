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
  let itemHidden2 = document.querySelector("img.hidden2");
  for (let item of list) {
    let newItem = itemHidden.cloneNode(true);
    newItem.classList.remove("hidden");

    newItem.addEventListener("click", function() {
      let sname = document.querySelector(".student-name");
      sname.innerText = item.name;
      let sInfo = document.querySelector(".student-info");
      sInfo.innerText = item.house;
      let sImage = document.querySelector("img");
      sImage.src = item.image;
      let sbg = document.querySelector("article");
      if (sInfo === "Gryffindor") {
        sbg.style.backgroundColor = "red";
      }
    });

    let p = newItem.querySelector("p");
    p.innerText = item.name;

    ul.append(newItem);
  }
}

render();
