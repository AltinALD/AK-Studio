

//language

document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language");

    // Set the correct language option based on the current page
    const currentFile = window.location.pathname.split("/").pop();
    if (currentFile.includes("index-de")) {
        languageSelector.value = "de";
    } else if (currentFile.includes("index-fr")) {
        languageSelector.value = "fr";
    } else {
        languageSelector.value = "en"; // default to English
    }

    // Handle language change and redirect
    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;

        if (selectedLang === "en") {
            window.location.href = "index.html";
        } else if (selectedLang === "de") {
            window.location.href = "index-de.html";
        } else if (selectedLang === "fr") {
            window.location.href = "index-fr.html";
        }
    });
});

    

// sticky button
document.addEventListener("DOMContentLoaded", function () {
    let stickyButton = document.getElementById("stickyButton");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            stickyButton.style.display = "block";
            setTimeout(() => {
                stickyButton.style.opacity = "1";
                stickyButton.style.transform = "translateY(0)";
            }, 100);
        } else {
            // Hide the button when scrolling back up
            stickyButton.style.opacity = "0";
            stickyButton.style.transform = "translateY(20px)"; // Move down slightly
            setTimeout(() => {
                stickyButton.style.display = "none";
            }, 300); // Wait for fade-out before hiding
        }
    });
});


//header slidr show
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 4000); // Change every 4 seconds
});
