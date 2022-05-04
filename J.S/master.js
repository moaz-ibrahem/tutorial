// chek color option
let minColors = localStorage.getItem('color-option');


if(minColors !== null) {


    document.documentElement.style.setProperty('--min-color',minColors);


    //remov active all class all chiled
    document.querySelectorAll(".colors-list li").forEach(element => {


        element.classList.remove("active")


        //add activ class on element with data-color === local storeg items
        if(element.dataset.color === minColors){

            element.classList.add("active");

        };

    });

};


// togel spinclss on icon 
document.querySelector(".togel-setting .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    // add class open
    document.querySelector(".setting-box").classList.toggle("open");
};


//random background option
let randombackgroundOption = true ;


//controlthe interval
let backgroundInterval;


//check local sstoreag randombackground item
let backgroundLocalItem = localStorage.getItem("background_option");

let randomSpan = document.querySelectorAll(".random-backgrounds span");

//check if random back item
if(backgroundLocalItem !== null) {

        //remove activefrom class all spans
        randomSpan.forEach(element => {

            element.classList.remove("active");
        
        });

    if(backgroundLocalItem === 'true') {

        backgroundOption = true;

        document.querySelector(".random-backgrounds .yes").classList.add("active");

    }else{

        backgroundOption = false;

        document.querySelector(".random-backgrounds .no").classList.add("active");

    };

};


//sweitch color
const colorLi =document.querySelectorAll(".colors-list li");

colorLi.forEach(li => {

    li.addEventListener("click",(e) => {


        //set color on root
        document.documentElement.style.setProperty('--min-color',e.target.dataset.color);


        //set color on local storage
        localStorage.setItem('color-option',e.target.dataset.color);


        handelActive (e)
    });

});


//sweitch backgrounds color
const randobackEl = randomSpan ;

randobackEl.forEach(span => {

    span.addEventListener("click",(e) => {

        handelActive (e)

        if (e.target.dataset.background === 'yes'){

            randombackgroundOption = true ;

            randomizeImage ();

            localStorage.setItem("background_option", true);

        }else{

            randombackgroundOption = false ;

            clearInterval(backgroundInterval)

            localStorage.setItem("background_option", false);

        };
    });
});

// select pading element page
let landingPage = document.querySelector(".landing-page");
// array images change 
let imagesArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];

//function to randomize images
function randomizeImage () {

    if (randombackgroundOption === true) {

        backgroundInterval = setInterval(()=>{

            // get randem numper
            let randomNumper = Math.floor(Math.random() * imagesArray.length);

            //change backgrund imge 
            landingPage.style.backgroundImage = 'url("../img/' + imagesArray[randomNumper] + '")';

        },10000);
    };
};

// #####################
// #####################
/* EROR  */ 
randomizeImage ();
// #####################
// #####################

//select skills 
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //skills of set top
    let skillsofsetTop = ourSkills.offsetTop;

    //skills outer height
    let skillsouterHeight = ourSkills.offsetHeight;
    
    //skills windwo height
    let windowHeight = this.innerHeight;
    
    //window scrol top
    let windowscrolTop = this.pageYOffset;
    
    if (windowscrolTop > (skillsofsetTop + skillsouterHeight - windowHeight)) {

        let allskills = document.querySelectorAll(".skill-box .skil-progres span");

        allskills.forEach(skill => {

            skill.style.width = skill.dataset.progres;

        });
    }

};

//creat the poupup with the image

let ourgallary = document.querySelectorAll(".gallary img")

ourgallary.forEach(img => {

    img.addEventListener('click',(e) => {

        //creat overlay element
        let overlay = document.createElement("div");

        //add class overlay
        overlay.className = 'popup-overlay';

        //append overlay to the body
        document.body.appendChild(overlay);

        //creat popup pox element
        let popupbox = document.createElement("div");

        //add class popupbox
        popupbox.className ='popup-box';

        //add alt in the img
        if(img.alt !== null){

            //creat headin
            let imgheading = document.createElement("h3")

            //creat text for heading
            let textheading = document.createTextNode(img.alt)

            //append text for the heading
            imgheading.appendChild(textheading)

            //append for popup box 
            popupbox.appendChild(imgheading)
        }

        //creat popup img
        let popupimg = document.createElement("img")

        //set imge source
        popupimg.src = img.src;

        //add src img in the popup box
        popupbox.appendChild(popupimg)

        //add popup box in the body 
        document.body.appendChild(popupbox)

        //creat the close span
        let closebuotton = document.createElement("span")

        //creat the text in the span
        let closebuottontext = document.createTextNode("x")

        //append text
        closebuotton.appendChild(closebuottontext)

        //add class onclose buotton
        closebuotton.className = 'close-buotton';

        // append the popup box
        popupbox.appendChild(closebuotton)
    })

})

//close popup
document.addEventListener('click', (e) => {

    //closs
    if(e.target.className === 'close-buotton') {

        //remove puottone
        e.target.parentNode.remove()

        //remove popup overlay
        document.querySelector(".popup-overlay").remove()
    }
});

//acses all bullets
const bulletsAll = document.querySelectorAll(".nav-bullets .bullet");


//acses all links
const linksAll = document.querySelectorAll(".links a");


//acses all

function scrollAll (elements) {

    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {
            
            e.preventDefault()

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"
            })
        });
    });
};

scrollAll(bulletsAll);
scrollAll(linksAll);

//handel active state

function handelActive (ev) {

    //remov active all class all chiled
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

        });
    
    //add active click element
    ev.target.classList.add("active");
    
    
};

let bulletSpan = document.querySelectorAll(".bulltes-option span");

let bulletContainer = document.querySelector(".nav-bullets");

let bulletLocal = localStorage.getItem("bulltes-option");



if (bulletLocal !== null) {

    bulletSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletLocal === "block") {

        bulletContainer.style.display = 'block';
        
        document.querySelector(".bulltes-option .yes").classList.add("active")

    }else {

        bulletContainer.style.display = 'none';

        document.querySelector(".bulltes-option .no").classList.add("active")

    }

}

bulletSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if(span.dataset.display === 'show'){

            bulletContainer.style.display = 'block';

            localStorage.setItem("bulltes-option", 'block');


        }else {

            bulletContainer.style.display = 'none';

            localStorage.setItem("bulltes-option", 'none');




        }

        handelActive(e)
    });
});

//reset buttuon
document.querySelector(".reset-option").onclick =function () {

    localStorage.clear()

    window.location.reload()

}

//toggel menu
let toggelBtn = document.querySelector(".toggle-menu");

let tLinkes = document.querySelector(".links");

toggelBtn.onclick = function (e) {

    //cleck span clos or oppen menu
    e.stopPropagation();

    this.classList.toggle("menu-active");

    tLinkes.classList.toggle("open");

}

//close menu toggel aney where 
document.addEventListener('click', (e) => {

    if (e.target !== tLinkes && e.target !== toggelBtn){

        if (tLinkes.classList.contains("open")) {

            toggelBtn.classList.toggle("menu-active");

            tLinkes.classList.toggle("open");


        }

    }

})

tLinkes.onclick = function (e) {

    e.stopPropagation();

};