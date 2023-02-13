const images = ["https://ichef.bbci.co.uk/images/ic/1920x1080/p05lqc4f.jpg", "https://cdn2.vectorstock.com/i/1000x1000/39/36/premium-quality-product-golden-label-design-vector-20013936.jpg", "https://flxt.tmsimg.com/assets/p16589568_l_h9_aa.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg/1200px-African_buffalo_%28Syncerus_caffer_caffer%29_male_with_cattle_egret.jpg"];
const maincontainer = document.getElementById('maincontainer')
const container = document.createElement('div')
container.setAttribute("id", "container")
maincontainer.appendChild(container)

const containerDOM = document.getElementById('container')
const headElement = document.createElement('div')
headElement.setAttribute("style", "margin-bottom:20px;")
const textHeadElement = document.createElement('h2')
textHeadElement.setAttribute('id', 'header')
const textHead = document.createTextNode("Exercise 04: JavaScript&DOM")
textHeadElement.appendChild(textHead)
headElement.appendChild(textHeadElement)

const buttonElement = document.createElement('button')
buttonElement.setAttribute('type', 'button')
buttonElement.setAttribute('id', 'date')
buttonElement.setAttribute('onclick', 'showDate(this)')
const buttonText = document.createTextNode('Click me to display Date and Time')
buttonElement.appendChild(buttonText)
headElement.appendChild(buttonElement)

containerDOM.appendChild(headElement)

const personalContainer = document.createElement('div')
personalContainer.setAttribute('id', 'personal')

const personalHead = document.createElement('span')
personalHead.setAttribute('id', 'text')
personalHead.setAttribute('style', 'text-decoration:underline; color:pink; cursor:pointer;')
personalHead.setAttribute('onmouseover', 'hover(this)')
personalHead.setAttribute('onmouseout', 'out(this)')
personalHead.setAttribute('onclick', 'show()')
const personalHeadText = document.createTextNode('Personal Info')
personalHead.appendChild(personalHeadText)
containerDOM.appendChild(personalHead)

const menuPersonal = document.createElement('ul')
menuPersonal.setAttribute('id', 'personalList')
menuPersonal.setAttribute('style', 'display:none;')
const textPersonals = ["Sirati Hirunthani, ID: 64010899", "Subject: Web Application Development", "Semester: 2"]
let listPersonals = []
for (let i = 0; i < textPersonals.length; i++) {
    const textPersonalElement = document.createElement('li')
    const textPersonal = document.createTextNode(textPersonals[i])
    textPersonalElement.appendChild(textPersonal)
    listPersonals.push(textPersonalElement)
}
listPersonals.map((listPersonal) => {
    menuPersonal.appendChild(listPersonal)
})
containerDOM.appendChild(menuPersonal)

const snapshotsElement = document.createElement('div')
snapshotsElement.setAttribute('id', 'snapshots')
const snapshotsTextElement = document.createElement('h1')
const snapshotsText = document.createTextNode('Snapshots')
snapshotsTextElement.appendChild(snapshotsText)
snapshotsElement.appendChild(snapshotsTextElement)
const menuSnapshots = document.createElement('ul')
menuSnapshots.setAttribute('id', 'snapshotsList')
const textSnapshots = ["Fireworks", "Crest", "Action", "Buffalo"]
let listSnapshots = []
for (let i = 0; i < textSnapshots.length; i++) {
    const textSnapshotsElement = document.createElement('li')
    textSnapshotsElement.setAttribute('onclick', `snapshots(${i})`)
    const textElement = document.createElement("span")
    textElement.setAttribute('style', 'text-decoration:underline; color:blue; cursor:pointer;')
    const textSnapshot = document.createTextNode(textSnapshots[i])
    textElement.appendChild(textSnapshot)
    textSnapshotsElement.appendChild(textElement)
    listSnapshots.push(textSnapshotsElement)
}
listSnapshots.map((listSnapshot) => {
    menuSnapshots.appendChild(listSnapshot)
})
snapshotsElement.appendChild(menuSnapshots)
const imageSnapshots = document.createElement('img')
imageSnapshots.setAttribute("width", "1000")
imageSnapshots.setAttribute('src', "https://www.ce.kmitl.ac.th/api/main/banner/download/1")
imageSnapshots.setAttribute("alt", "")
snapshotsElement.appendChild(imageSnapshots)
containerDOM.appendChild(snapshotsElement)

const snapshots = (index) => {
    imageSnapshots.setAttribute('src', images[index])
}

const hover = (x) => {
    x.style.backgroundColor = 'yellow'
    x.style.color = 'blue'
}

const out = (x) => {
    x.style.backgroundColor = ''
}

const show = () => {
    let list = document.getElementById('personalList')

    if (list.style.display === "none") {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
}
let started = false
let timer;
const showDate = (e) => {
    if (!started) {
        timer = setInterval(date, 1000)
        started = true
    } else {
        started = false
        e.style.position = null
        clearInterval(timer);
    }
}

const date = () => {
    if (started) {
        const dateElement = document.getElementById('date')
        dateElement.innerText = new Date();
        dateElement.style.position = "fixed"
        dateElement.style.top = 0
        dateElement.style.right = 0
        dateElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        dateElement.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
}