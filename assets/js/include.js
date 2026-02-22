// This method works even without a local server
const navigationHTML = `
<nav>
    <a href="index.html" class="logo">
        <img src="images/logo.png" alt="ExcelKidsHub Logo" style="max-height: 80px; width: auto;">
    </a>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="courses.html">Courses</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>`;

const footerHTML = `
<footer>
    <p><strong>ExcelKidsHub Phonics Academy</strong></p>
    <p>📍 Inside Lakewood Preschool, Dhanori, Pune - 411015</p>
    <p>📞 +91 8793135679 | UK Certified Trainer: Swati Deshmukh</p>
</footer>`;

document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (navPlaceholder) navPlaceholder.innerHTML = navigationHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
});