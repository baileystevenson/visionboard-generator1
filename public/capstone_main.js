//////////Motto Box/////////

function myFunction() {
  let mottoBar =document.getElementById('motto');
  let newMotto=mottoBar.value
  mottoBar.placeholder=newMotto
  mottoBar.value=""

}

/////////////add items to lists////////////

let addButton = document.querySelector('#add')
let addInput = document.querySelector('#item')
addButton.addEventListener('click', function () {

  let newItem = document.getElementById('item').value
  if (newItem) {
    createWant({want:newItem})
    addWant(newItem)
    document.getElementById('item').value = ''
  }
})

addInput.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem = document.getElementById('item').value
    if (newItem) {
      addWant(newItem)
      document.getElementById('item').value = ''
    }
  }
})

const baseURL = `/api/want`

const wantCallback = ({ data: want }) => displayWant(want)
const errCallback = err => console.log(err.response.data)

const createWant = body => axios.post(baseURL, body).then(console.log('hello test')).catch(errCallback)
const deleteWant = id => axios.delete(`${baseURL}/${id}`).then(wantCallback).catch(errCallback)

function addWant(text){
  let list = document.getElementById('wants')
  let item = document.createElement('li')
  item.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item.appendChild(buttons)
  list.appendChild(item) 



}
function removeItem() {
  let item = this.parentNode.parentNode
  let parent = item.parentNode
  parent.removeChild(item)
}




let addButton1 = document.querySelector('#add1')
let addInput1 = document.querySelector('#item11')
addButton1.addEventListener('click', function () {

  let newItem11 = document.getElementById('item11').value
  if (newItem11) {
    createInspire({inspire:newItem})
    addInspired(newItem11)
    document.getElementById('item11').value = ''
  }
})
addInput1.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem1 = document.getElementById('item11').value
    if (newItem1) {
      addInspired(newItem1)
      document.getElementById('item11').value = ''
    }
  }
})


const baseURL1 = `/api/inspire`

const inspireCallback = ({ data: inspire }) => displayDisplay(inpsire)
const errCallback1 = err => console.log(err.response.data)

const createInspire = body => axios.post(baseURL, body).then(console.log('hello test')).catch(errCallback)
const deleteInspire = id => axios.delete(`${baseURL}/${id}`).then(wantCallback).catch(errCallback)

function addInspired(text) {
  let list11 = document.getElementById('inspire')
  let item11 = document.createElement('li')
  item11.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button') 
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item11.appendChild(buttons)
  list11.appendChild(item11) 
}

function removeItem() {
  let item11 = this.parentNode.parentNode
  let parent11 = item11.parentNode
  parent11.removeChild(item11)
}
 


let addButton2 = document.querySelector('#add2')
let addInput2 = document.querySelector('#item12')
addButton2.addEventListener('click', function () {

  let newItem12 = document.getElementById('item12').value
  if (newItem12) {
    addGoal(newItem12)
    document.getElementById('item12').value = ''
  }
})
addInput2.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem12 = document.getElementById('item12').value
    if (newItem12) {
      addGoal(newItem12)
      document.getElementById('item12').value = ''
    }
  }
})

function addGoal(text) {
  let list12 = document.getElementById('goal')
  let item12 = document.createElement('li')
  item12.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item12.appendChild(buttons)
  list12.appendChild(item12) 
}

function removeItem() {
  let item12 = this.parentNode.parentNode
  let parent12 = item2.parentNode
  parent12.removeChild(item12)
}



let addButton3 = document.querySelector('#add3')
let addInput3 = document.querySelector('#item3')
addButton3.addEventListener('click', function () {

  let newItem3 = document.getElementById('item3').value
  if (newItem3) {
    addDream(newItem3)
    document.getElementById('item3').value = ''
  }
})
addInput3.addEventListener('keypress', function (e) {
  if (13 === e.keyCode) {
    let newItem3 = document.getElementById('item3').value
    if (newItem3) {
      addDream(newItem3)
      document.getElementById('item3').value = ''
    }
  }
})

function addDream(text) {
  let list3 = document.getElementById('dream')
  let item3 = document.createElement('li')
  item3.innerText = text
  let buttons = document.createElement('div')
  buttons.classList.add('buttons')
  let remove = document.createElement('button')
  remove.classList.add('X')
  remove.textContent = "X"
  remove.addEventListener('click', removeItem)
  buttons.appendChild(remove)
  item3.appendChild(buttons)
  list3.appendChild(item3) 
}

function removeItem() {
  let item3 = this.parentNode.parentNode
  let parent3 = item3.parentNode
  parent3.removeChild(item3)
}

////////drop down function///////////
function myFunction1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
let puppyImg= document.getElementById('puppy')
let picSelect = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

puppyImg.addEventListener("click",picSelect)

let beachImg= document.getElementById('beach')
let picSelect1 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

beachImg.addEventListener("click",picSelect)



let careerImg= document.getElementById('career')
let picSelect2 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

careerImg.addEventListener("click",picSelect)


let travelImg= document.getElementById('travel')
let picSelect3 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

travelImg.addEventListener("click",picSelect)


let houseImg= document.getElementById('house')
let picSelect4 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

houseImg.addEventListener("click",picSelect)



let familyImg= document.getElementById('family')
let picSelect5 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

familyImg.addEventListener("click",picSelect)


let relaxImg= document.getElementById('relax')
let picSelect6 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

relaxImg.addEventListener("click",picSelect)

let carImg= document.getElementById('car')
let picSelect7 = (evt) => {
    let item1 =document.getElementById('item1')
    item1.style.backgroundImage = `url(${evt.target.src})`
}

carImg.addEventListener("click",picSelect)


///Drop Down 2///

function myFunction2() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


////Axios////



