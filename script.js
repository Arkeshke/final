//modul-----------------------------------------------
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function (){
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
//tab-----------------------------------------------
function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
//arc-----------------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
}

// burger -----------

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   
}
// slide -----------------------------------

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// filter

function myapp() {
    const buttons = document.querySelectorAll(".button");
    const cards = document.querySelectorAll(".card");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
    });
}
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        console.log(currentCategory);
        filter(currentCategory, cards);
    });
});
}
  
myapp();