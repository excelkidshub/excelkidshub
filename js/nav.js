const navigationHTML = `
<div class="container nav-container">

    <div class="logo-area">
        <a href="/">
            <img src="images/logo.svg" alt="ExcelKidsHub Phonics Academy Logo">
        </a>
        <a href="tel:+918793135679" class="header-phone">
            +91 8793135679
        </a>
    </div>

    <div class="hamburger" id="hamburger">
        <span id="hamburger-icon">☰</span>
        <span id="close-icon" style="display:none">&#10005;</span>
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
<footer style="background:#1a1a2e;color:#fff;padding:0;margin-top:40px;font-family:'Poppins',sans-serif;">
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
        <div style="display:flex;flex-wrap:wrap;gap:40px;padding:48px 0 24px 0;">
            <div style="flex:1 1 220px;min-width:220px;max-width:340px;">
                <img src="images/logo.svg" alt="ExcelKidsHub Logo" style="height:54px;background:#fff;padding:8px 24px;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.07);margin-bottom:18px;">
                <p style="margin-bottom:14px;">ExcelKidsHub Phonics Academy<br><span style="font-size:13px;opacity:0.8;">Structured phonics classes for children in Dhanori, Pune. Building strong readers, spellers, and communicators.</span></p>
                <div style="margin:18px 0 10px 0;">
                    <div class="c-trust-mini-row c-trust-mini-row--footer" style="display:flex;gap:28px;align-items:center;">
                        <div class="c-trust-mini-row__col" style="text-align:center;">
                            <a href="https://www.google.com/search?q=excelkidshub+phonics+academy+dhanori+pune+reviews" target="_blank" rel="noreferrer">
                                <img class="o-fluid-img" src="https://www.pngall.com/wp-content/uploads/17/Five-Star-Review-Google-Business-Rating-PNG.png" alt="Google reviews 5 star" loading="lazy" style="height:38px;width:auto;object-fit:contain;border-radius:6px;padding:2px 8px;box-shadow:0 2px 8px rgba(0,0,0,0.10);">
                            </a>
                        </div>
                        <div class="c-trust-mini-row__col" style="text-align:center;">
                            <img src="https://img.icons8.com/color/48/000000/verified-account--v2.png" alt="Udyam Registered" style="height:32px;width:32px;background:#fff;border-radius:6px;padding:2px;box-shadow:0 2px 8px rgba(0,0,0,0.10);">
                            <div style="font-size:12px;color:#fff;opacity:0.8;">Udyam Registered</div>
                        </div>
                        <div class="c-trust-mini-row__col" style="text-align:center;">
                            <img src="https://img.icons8.com/color/48/000000/certificate.png" alt="ISO 9001:2015" style="height:32px;width:32px;background:#fff;border-radius:6px;padding:2px;box-shadow:0 2px 8px rgba(0,0,0,0.10);">
                            <div style="font-size:12px;color:#fff;opacity:0.8;">ISO 9001:2015</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="flex:1 1 220px;min-width:220px;max-width:340px;">
                <h3 style="color:#facc15;">Quick Links</h3>
                <ul style="list-style:none;padding:0;margin:0 0 18px 0;">
                    <li><a href="/" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Home</a></li>
                    <li><a href="about" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">About Us</a></li>
                    <li><a href="courses" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Courses</a></li>
                    <li><a href="schedule" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Schedule</a></li>
                    <li><a href="gallery" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Gallery</a></li>
                    <li><a href="blog" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Blog</a></li>
                    <li><a href="contact" style="color:#fff;text-decoration:none;font-weight:500;transition:color 0.2s;">Contact</a></li>
                </ul>
            </div>
            <div style="flex:1 1 220px;min-width:220px;max-width:340px;">
                <h3 style="color:#facc15;">Contact</h3>
                <p><span style="font-weight:600;">📞</span> <a href="tel:+918793135679" style="color:#fff;text-decoration:none;font-weight:500;">+91 8793135679</a></p>
                <p><span style="font-weight:600;">✉️</span> <a href="mailto:excelkidshub.edu@gmail.com" style="color:#fff;text-decoration:none;font-weight:500;">excelkidshub.edu@gmail.com</a></p>
                <p><span style="font-weight:600;">📍</span> Inside Lakewood Preschool, Dhanori, Pune</p>
                <p style="font-size:13px;opacity:0.8;">Online & Offline Batches</p>
            </div>
            <div style="flex:1 1 220px;min-width:220px;max-width:340px;">
                <h3 style="color:#facc15;">Follow Us</h3>
                <div style="display:flex;gap:14px;margin-top:10px;">
                    <a href="https://www.facebook.com/excelkidshubphonics/" target="_blank" aria-label="Facebook"><img src="https://res.cloudinary.com/dhqvlsb3l/image/upload/v1/assets/na/seo-website/icon-facebook.svg" alt="Facebook" style="width:32px;height:32px;background:#fff;border-radius:50%;padding:4px;box-sizing:content-box;box-shadow:0 2px 8px rgba(0,0,0,0.10);"></a>
                      <a href="https://www.instagram.com/excelkidshub/" target="_blank" aria-label="Instagram"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style="width:32px;height:32px;background:#fff;border-radius:50%;padding:4px;box-sizing:content-box;box-shadow:0 2px 8px rgba(0,0,0,0.10);"></a>
                        <a href="https://www.pinterest.com/excelkidshub/" target="_blank" aria-label="Pinterest"><img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pinterest.svg" alt="Pinterest" style="width:32px;height:32px;background:#fff;border-radius:50%;padding:4px;box-sizing:content-box;box-shadow:0 2px 8px rgba(0,0,0,0.10);"></a>
                        
                </div>
            </div>
        </div>
        <div style="border-top:1px solid #2e2e4d;margin:24px 0;"></div>
        <div style="text-align:center;color:#fff;opacity:0.7;font-size:14px;padding:18px 0 10px 0;background:#151528;">
            © 2026 ExcelKidsHub Phonics Academy | Dhanori Pune
        </div>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav-placeholder").innerHTML = navigationHTML;
    if (document.getElementById("footer-placeholder")) {
        document.getElementById("footer-placeholder").innerHTML = footerHTML;
    }

    // Active Menu Highlight
    const currentPage = window.location.pathname.replace(/\/$/, '').split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        let href = link.getAttribute("href").replace(/\/$/, '');
        href = href.replace(/^\//, '');
        if ((currentPage === "" && href === "") || href === currentPage) {
            link.classList.add("active-link");
        }
    });

    // Hamburger Toggle with Cross
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("navLinks");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        if(nav.classList.contains("show-menu")) {
            hamburgerIcon.style.display = "none";
            closeIcon.style.display = "inline";
        } else {
            hamburgerIcon.style.display = "inline";
            closeIcon.style.display = "none";
        }
    });

    // Close menu when clicking a link (mobile UX)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(window.innerWidth <= 900 && nav.classList.contains("show-menu")) {
                nav.classList.remove("show-menu");
                hamburgerIcon.style.display = "inline";
                closeIcon.style.display = "none";
            }
        });
    });
});
