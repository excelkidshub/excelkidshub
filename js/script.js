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
const tinyPlaceholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function loadGalleryImage(img) {
    if (!img.dataset.src) return;
    const clearLoadingState = () => {
        img.classList.remove("is-loading");
    };
    img.addEventListener("load", clearLoadingState, { once: true });
    img.addEventListener("error", clearLoadingState, { once: true });
    img.src = img.dataset.src;
    if (img.complete) {
        clearLoadingState();
    }
    img.removeAttribute("data-src");
}

function showPage(page){
    if (!galleryGrid) return;
    galleryGrid.innerHTML = "";

    const start = page * imagesPerPage;
    const end = start + imagesPerPage;

    images.slice(start, end).forEach(src => {
        const img = document.createElement("img");
        img.src = tinyPlaceholder;
        img.dataset.src = src;
        img.width = 600;
        img.height = 400;
        img.alt = "Phonics class in Dhanori Pune";
        img.loading = "lazy";
        img.decoding = "async";
        img.classList.add("gallery-lazy", "is-loading");
        loadGalleryImage(img);
        galleryGrid.appendChild(img);
    });

    dots.forEach(dot => dot.classList.remove("active-dot"));
    if (dots[page]) {
        dots[page].classList.add("active-dot");
    }
}

window.showPage = showPage; // Important for onclick to work
if (galleryGrid) {
    showPage(0);
}

});


const testimonialSection = document.querySelector(".testimonials");
const testimonialGallery = testimonialSection ? testimonialSection.querySelector(".testimonial-gallery") : null;
const testimonialDots = testimonialSection ? testimonialSection.querySelectorAll(".gallery-dots .dot") : [];
const testimonialCardsPerPage = 3;

function loadTestimonialImages(page) {
  if (!testimonialGallery) return;
  const start = page * testimonialCardsPerPage;
  const end = start + testimonialCardsPerPage;
  const cards = testimonialGallery.querySelectorAll(".testimonial-card");

  cards.forEach((card, index) => {
    if (index < start || index >= end) return;
    const img = card.querySelector("img[data-src]");
    if (img && img.dataset.src) {
      const clearLoadingState = () => {
        img.classList.remove("is-loading");
      };
      img.addEventListener("load", clearLoadingState, { once: true });
      img.addEventListener("error", clearLoadingState, { once: true });
      img.src = img.dataset.src;
      if (img.complete) {
        clearLoadingState();
      }
      img.removeAttribute("data-src");
    }
  });
}

function showTestimonialPage(page) {
  if (!testimonialGallery) return;
  loadTestimonialImages(page);
  const cardWidth = testimonialGallery.querySelector('.testimonial-card').offsetWidth + 20; // card + gap
  testimonialGallery.scrollLeft = page * cardWidth * testimonialCardsPerPage;

  testimonialDots.forEach((dot) => dot.classList.remove("active-dot"));
  if (testimonialDots[page]) {
    testimonialDots[page].classList.add("active-dot");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (testimonialGallery) {
    showTestimonialPage(0);
  }
});

// IMAGE POPUP
document.addEventListener("DOMContentLoaded", function(){

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("popupImage");
  const closeBtn = document.querySelector(".close-modal");
  if (!modal || !modalImg || !closeBtn) return;

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
    if (!modal || !modalImg) return;

    modal.style.display = "block";
    modalImg.src = e.target.src;
  }

});

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

function loadLiteYouTube(wrapper) {
  if (!wrapper || wrapper.dataset.loaded === "true") return;
  const videoId = wrapper.dataset.videoId;
  const title = wrapper.dataset.title || "YouTube video";
  if (!videoId) return;

  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0&playsinline=1";
  iframe.title = title;
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  wrapper.innerHTML = "";
  wrapper.appendChild(iframe);
  wrapper.classList.add("is-loaded");
  wrapper.removeAttribute("role");
  wrapper.removeAttribute("tabindex");
  wrapper.dataset.loaded = "true";
}

function setupLiteYouTube() {
  const wrappers = document.querySelectorAll(".lite-youtube");
  wrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => loadLiteYouTube(wrapper));
    wrapper.addEventListener("touchend", () => loadLiteYouTube(wrapper), { passive: true });
    wrapper.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        loadLiteYouTube(wrapper);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", setupLiteYouTube);
