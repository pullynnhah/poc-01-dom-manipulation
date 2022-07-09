function createDisplayTag() {
  const id = document.getElementById("name");
  if (id.value === "") {
    const worlds = document.querySelector(".worlds");

    const newP = document.createElement("p");
    const newContent = document.createTextNode(`Hello, World ${index++}!`);

    newP.appendChild(newContent);
    worlds.appendChild(newP);
  } else {
    name = id.value;
    id.value = "";
    alert(`Hello, ${name}`);
  }
}

function showEvenNumbers() {
  const ps = [...document.querySelectorAll(".worlds p")];
  ps.forEach((p, index) => {
    if (index % 2 !== 0) {
      p.classList.add("hidden");
    } else if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
    }
  });
}

function showOddNumbers() {
  const ps = [...document.querySelectorAll(".worlds p")];
  ps.forEach((p, index) => {
    if (index % 2 === 0) {
      p.classList.add("hidden");
    } else if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
    }
  });
}

function reloadPage() {
  const input = document.getElementsByClassName("name").namedItem("name");
  if (input.value === "") {
    alert(`Tchau, ${name}!`);
  } else {
    alert(`Tchau, ${input.value}!`);
  }
  input.value = "";
  window.location.reload();
}

function showInnerHTML() {
  const worlds = document.querySelector(".worlds");
  console.log(worlds.innerHTML);
  alert("Open console! [F12]");
}

function showInnerText() {
  const worlds = document.querySelector(".worlds");
  console.log(worlds.innerText);
  alert("Open console! [F12]");
}

function showTextContent() {
  const worlds = document.querySelector(".worlds");
  console.log(worlds.textContent);
  alert("Open console! [F12]");
}

let name = "J. Doe";
let index = 0;
