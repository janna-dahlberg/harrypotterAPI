async function getData() {
  // Fetch and wait for request to finish
  let response = await fetch(
    "http://hp-api.herokuapp.com/api/characters/students"
  );
  // Convert and wait for data to be converted to JSON
  let responseBody = await response.json();
  // Return the array of users
  return responseBody;
}

async function render() {
  // Call and wait for getData() to return the array of users
  let list = await getData();
  // Store the <ul> tag
  let ul = document.querySelector("ul");
  //Store the <li class="prototype"> tag
  let itemHidden = document.querySelector("li.hidden");
  // Iterate over each user in the array of users

  for (let item of list) {
    // Copy the prototype and remove the prototype class
    let newItem = itemHidden.cloneNode(true);
    newItem.classList.remove("hidden");

    let pInfo = document.querySelector(".student-info");
    newItem.addEventListener("click", function() {
      pInfo.innerText = item.house;
      let pname = document.querySelector(".student-name");
      pname.innerText = item.name;
    });
    // Change the text of the paragraph inside the prototype
    let p = newItem.querySelector("p");
    p.innerText = item.name;
    // Add it to the <ul> tag
    ul.append(newItem);
  }
}

render();
