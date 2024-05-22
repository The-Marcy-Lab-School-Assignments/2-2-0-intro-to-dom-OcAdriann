const getMainHeadingText = () => {
  console.log(document.querySelector("#main-heading").textContent)
};

const getAllMainText = () => {
  const newArr = []
  const list = document.querySelectorAll(".main-text")
  for (let i of list) {
    newArr.push(i.textContent)
  }
  console.log(newArr.join(","))
};

const setSubtitleText = () => {
  console.log(document.querySelector('#subtitle').textContent = 'This is a subtitle!')
};

const modifyDivClassList = () => {
  const list = document.querySelector("#modify-classes")
  list.classList.remove("bad-class")
  list.classList.add("new-class")
};

const addH2 = () => {
  const h2 = document.createElement("h2")
  h2.textContent = "Another one!"
  h2.id = 'h2-test'
  document.body.append(h2)
};

const removeOldInfo = () => {
  document.querySelector("#old-info").remove()
};

const makeAlphabet = () => {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const ol = document.querySelector('#alphabet')
  for (let i = 0; i < ol.dataset.numLetters; i++) {
    const li = document.createElement("li")
    li.textContent = `${arr[i]} is letter #${i + 1} in the alphabet`
    ol.append(li)
  }
};

const makeBio = () => {
  const bio = document.querySelector("#my-bio")
  bio.innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
