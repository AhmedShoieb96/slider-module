// get slider items
let sliderItems = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slide

var slideCount = sliderItems.length;

// get slider num element
var sliderImageNum = document.getElementById("slider-num")
// console.log(sliderImageNum)


// set current number
var currentImage = 1;

// get previous&next element

let prev = document.querySelector(".previous");

let nex = document.querySelector(".next");



// handle click in btns

prev.onclick = goPrevious;
nex.onclick = goNext;   

// create ul & li for indecators
let indecatorsElement = document.createElement("ul");
indecatorsElement.setAttribute('id', 'indecator-element');

// to create lis we should use for loop

for (let i = 1; i <= slideCount; i++){
    let indecatorsItem = document.createElement("li");
    // set attributs
    indecatorsItem.setAttribute('id', 'indecator-item');
    indecatorsItem.setAttribute('date-index', i);

    let indecatorsItemText = document.createTextNode(i)

    indecatorsItem.appendChild(indecatorsItemText);

    indecatorsElement.appendChild(indecatorsItem);
    
    // set all of this in span indecators 
}
document.querySelector(".indecators").append(indecatorsElement)

    
    // use chekker
    
    // get the new created ul

let createdElementUl = document.getElementById('indecator-element')

// make an array of li
let indecetorUL = Array.from(document.querySelectorAll("#indecator-element li"));

// loop to work for bullets
for (var i = 0; i < indecetorUL.length; i++){
    indecetorUL[i].onclick=function () {
        currentImage = parseInt(this.getAttribute('date-index'))
        checker()
}
}
    console.log(indecetorUL)

    // set cheker function 
    // set previous and next function
function goPrevious() {
    if (prev.classList.contains('disabled')) {
        return false;
    } else {
        currentImage--;
        checker()
    }
}

function goNext() {
    if (nex.classList.contains('disabled')) {
        return false;
    } else {
        currentImage++;
        checker()
    }
}
function checker() {
        
    // to change num of image
    sliderImageNum.textContent = 'img #' + (currentImage) + 'of' + (slideCount);
        
    removeAllActive()
       
    // add active class to image
    sliderItems[currentImage - 1].classList.add('active');
       
    // to change class of li to active
    createdElementUl.children[currentImage - 1].classList.add('active');
    
    // add class diabled & remove it in prev
    
    if (currentImage == 1) {
        prev.classList.add('disabled')
    } else {
        prev.classList.remove('disabled')

    }
    // add class diabled & remove it in nex
    if (currentImage == slideCount) {
        nex.classList.add('disabled')

    } else {
        nex.classList.remove('disabled')

    }
     
}


function removeAllActive() {
    // loop for remove active from img
    sliderItems.forEach(function (img) {

        img.classList.remove('active')
    });
    indecetorUL.forEach(function (bullets) {
        bullets.classList.remove('active')

    });
}