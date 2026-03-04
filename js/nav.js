const navigationHTML = `
<div class="container nav-container">

    <div class="logo-area">
        <a href="index.html">
            <img src="images/logo.svg" alt="ExcelKidsHub Phonics Academy Logo">
        </a>
        <a href="tel:+918793135679" class="header-phone">
            +91 8793135679
        </a>
    </div>

    <div class="hamburger" id="hamburger">
        ☰
    </div>

    <nav class="nav-links" id="navLinks">
        <a href="/">Home</a>
        <a href="schedule">Schedule</a>
        <a href="admissions">Admissions</a>
        <a href="courses">Courses</a>
        <a href="gallery">Gallery</a>
        <a href="contact">Contact</a>
    </nav>

</div>
`;

const footerHTML = `
<footer>
<div class="container footer-grid">

<div>
<h3>ExcelKidsHub</h3>
<p>Structured Phonics Classes in Dhanori Pune.</p>
</div>

<div>
<h3>Quick Links</h3>
<a href="/">Home</a><br>
<a href="courses">Courses</a><br>
<a href="schedule">Schedule</a><br>
<a href="gallery">Gallery</a><br>
<a href="contact">Contact</a><br>
<a href="blog">Our Blog</a>
</div>

<div>
<h3>Location</h3>
<p>Inside Lakewood Preschool, Dhanori, Pune - 411015</p>
<p>📞 +91 8793135679</p>
<p>Online & Offline Batches</p>
</div>

</div>

<div class="copy">
© 2026 ExcelKidsHub Phonics Academy | Dhanori Pune
</div>
</footer>
`;

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("nav-placeholder").innerHTML = navigationHTML;
    document.getElementById("footer-placeholder").innerHTML = footerHTML;

    // Active Menu Highlight
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active-link");
        }
    });

    // Hamburger Toggle
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });

});
