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
    });

    let p = newItem.querySelector("p");
    p.innerText = item.name;

    ul.append(newItem);
  }
}

render();
