let groups=document.querySelectorAll(".testimonial-group");
let dots=document.querySelectorAll(".dot");

function showGroup(n){
groups.forEach(g=>g.classList.remove("active-group"));
dots.forEach(d=>d.classList.remove("active-dot"));
groups[n].classList.add("active-group");
dots[n].classList.add("active-dot");
}

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    if(window.scrollY > 50){
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});


document.addEventListener("DOMContentLoaded", function() {

const images = [
"images/class/c1.webp?w=600",
"images/class/c2.webp?w=600",
"images/class/c3.webp?w=600",
"images/class/c4.webp?w=600",
"images/class/c5.webp?w=600",
"images/class/c6.webp?w=600",

"images/class/c7.webp?w=600",
"images/class/c8.webp?w=600",
"images/class/c9.webp?w=600",
"images/class/c10.webp?w=600",
"images/class/c11.webp?w=600",
"images/class/c12.webp?w=600",

"images/class/c13.webp?w=600",
"images/class/c14.webp?w=600",
"images/class/c15.webp?w=600",
"images/class/c16.webp?w=600",
"images/class/c17.webp?w=600",
"images/class/c18.webp?w=600"
];

const imagesPerPage = 6;
const galleryGrid = document.getElementById("galleryGrid");
const dots = document.querySelectorAll(".gallery-dots .dot");

function showPage(page){
    galleryGrid.innerHTML = "";

    const start = page * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Phonics class in Dhanori Pune";
        img.loading = "lazy";
        galleryGrid.appendChild(img);
    });

    dots.forEach(dot => dot.classList.remove("active-dot"));
    dots[page].classList.add("active-dot");
}

window.showPage = showPage; // Important for onclick to work
showPage(0);

});


const testimonialGallery = document.querySelector('.testimonial-gallery');
const testimonialDots = document.querySelectorAll('.gallery-dots .dot');

function showTestimonialPage(page) {
  const cardWidth = testimonialGallery.querySelector('.testimonial-card').offsetWidth + 20; // card + gap
  testimonialGallery.scrollLeft = page * cardWidth * 3; // 3 cards per page

  testimonialDots.forEach(dot => dot.classList.remove('active-dot'));
  testimonialDots[page].classList.add('active-dot');
}

// IMAGE POPUP
document.addEventListener("DOMContentLoaded", function(){

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("popupImage");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".testimonial-card img").forEach(img => {
    img.addEventListener("click", function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.onclick = function(){
    modal.style.display = "none";
  };

  modal.onclick = function(e){
    if(e.target === modal){
      modal.style.display = "none";
    }
  };

});


// IMAGE POPUP FOR GALLERY
document.addEventListener("click", function(e) {

  if (e.target.matches(".gallery-grid img")) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("popupImage");

    modal.style.display = "block";
    modalImg.src = e.target.src;
  }

});

const closeBtn = document.querySelector(".close-modal");
const modal = document.getElementById("imageModal");

if(closeBtn){
  closeBtn.onclick = function(){
    modal.style.display = "none";
  };
}

if(modal){
  modal.onclick = function(e){
    if(e.target === modal){
      modal.style.display = "none";
    }
  };
}

// FAQ accordion behaviour
function setupFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const toggle = item.querySelector('.faq-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const alreadyActive = item.classList.contains('active');
        // collapse all
        items.forEach(i => {
          i.classList.remove('active');
          const t = i.querySelector('.faq-toggle');
          if (t) t.textContent = '+';
        });
        if (!alreadyActive) {
          item.classList.add('active');
          if (toggle) toggle.textContent = '-';
        }
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', setupFAQ);