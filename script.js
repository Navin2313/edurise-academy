/* ==================================================
   PHASE 18 - JAVASCRIPT
   STEP 1 - MOBILE MENU
   ================================================== */


/* Mobile menu elements */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");


/* Open / Close mobile menu */

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

});


/* Close menu after clicking a navigation link */

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("mobile-open");

    });

});
/* ==================================================
   PHASE 18 - STEP 2
   COURSE FILTER
   ================================================== */

const filterButtons = document.querySelectorAll(".filter-button");
const courseCards = document.querySelectorAll(".course-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* Remove active class from all buttons */

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });


        /* Make clicked button active */

        button.classList.add("active");


        /* Get selected category */

        const selectedCategory = button.textContent
            .trim()
            .toLowerCase();


        /* Filter courses */

        courseCards.forEach(function (card) {

            const category = card
                .querySelector(".course-category")
                .textContent
                .trim()
                .toLowerCase();


            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});
/* ==================================================
   PHASE 18 - STEP 3
   STATISTICS COUNTER ANIMATION
   ================================================== */

const statNumbers = document.querySelectorAll(".stat-item h3");

function startCounter(element) {

    const target = Number(element.getAttribute("data-target"));

    let current = 0;

    const duration = 1500;

    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        /* Smooth animation */

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        current = Math.floor(target * easedProgress);


        /* Keep original formatting */

        if (target === 5000) {

            element.textContent =
                current.toLocaleString() + "+";

        } else if (target === 1200) {

            element.textContent =
                current.toLocaleString() + "+";

        } else if (target === 95) {

            element.textContent =
                current + "%";

        } else {

            element.textContent =
                current + "+";

        }


        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        }

    }


    requestAnimationFrame(updateCounter);
}


/* Start counters when statistics section enters viewport */

const statisticsSection =
    document.querySelector(".statistics");


let counterStarted = false;


if (statisticsSection) {

    const observer = new IntersectionObserver(
        function (entries) {

            if (
                entries[0].isIntersecting &&
                !counterStarted
            ) {

                counterStarted = true;

                statNumbers.forEach(function (stat) {

                    startCounter(stat);

                });

                observer.disconnect();

            }

        },
        {
            threshold: 0.4
        }
    );


    observer.observe(statisticsSection);

}
/* ==================================================
   PHASE 18 - STEP 4
   ADMISSION FORM VALIDATION
   ================================================== */

const admissionForm = document.getElementById("admission-form");


if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* Get form fields */

        const name = document.getElementById("name");

        const phone = document.getElementById("phone");

        const email = document.getElementById("email");

        const course = document.getElementById("course");

        const message = document.getElementById("message");
       const submitButton = admissionForm.querySelector('button[type="submit"]');

let successMessage = admissionForm.querySelector(".form-success-message");

if (!successMessage) {
    successMessage = document.createElement("div");
    successMessage.className = "form-success-message";
    admissionForm.appendChild(successMessage);
}


        /* Full Name */

        if (!name.value.trim()) {

            alert("Please enter your full name.");

            name.focus();

            return;
        }


        /* Mobile Number */

        if (!phone.value.trim()) {

            alert("Please enter your mobile number.");

            phone.focus();

            return;
        }


        /* Mobile Number Format */

        const phonePattern = /^[6-9]\d{9}$/;

        if (!phonePattern.test(phone.value.trim())) {

            alert("Please enter a valid 10-digit mobile number.");

            phone.focus();

            return;
        }


        /* Email */

        if (!email.value.trim()) {

            alert("Please enter your email address.");

            email.focus();

            return;
        }


        /* Email Format */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {

            alert("Please enter a valid email address.");

            email.focus();

            return;
        }


        /* Course */

        if (!course.value) {

            alert("Please select a course.");

            course.focus();

            return;
        }


        /* Message */

        if (!message.value.trim()) {

            alert("Please enter your message.");

            message.focus();

            return;
        }


        /* ==================================================
   PHASE 18
   WHATSAPP ENQUIRY
   ================================================== */

const whatsappNumber = "6388243227";


const whatsappMessage =
    `Hello EduRise Academy,

New Admission Enquiry

Name: ${name.value.trim()}
Phone: ${phone.value.trim()}
Course: ${course.options[course.selectedIndex].text}
Message: ${message.value.trim()}`;


const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);


/* Show sending state */

submitButton.disabled = true;
submitButton.textContent = "Sending...";


/* Open WhatsApp */

window.open(whatsappURL, "_blank");


/* Reset form */

event.target.reset();


/* Show success message */

successMessage.textContent =
    "Your enquiry has been sent successfully. We will contact you shortly.";

successMessage.classList.add("show");


/* Hide success message after 4 seconds */

setTimeout(function () {
    successMessage.classList.remove("show");
}, 4000);


/* Restore button */

submitButton.disabled = false;
submitButton.textContent = "Submit Enquiry";

    });

}

/* ==================================================
   COURSE DETAILS MODAL
   ================================================== */

const courseModal = document.getElementById("courseModal");
const courseModalClose = document.querySelector(".course-modal-close");
const courseModalOverlay = document.querySelector(".course-modal-overlay");
const courseDetailsButtons = document.querySelectorAll(".course-button");

courseDetailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCourse = button.getAttribute("data-course");

       if (selectedCourse === "ssc" || selectedCourse === "police") {

    const modalCourseCategory = document.getElementById("modalCourseCategory");
    const modalCourseTitle = document.getElementById("modalCourseTitle");
    const modalCourseDescription = document.getElementById("modalCourseDescription");

    if (selectedCourse === "police") {

        modalCourseCategory.textContent = "Police";
        modalCourseTitle.textContent = "Police Constable Course";
        modalCourseDescription.textContent =
            "Complete preparation program for Police Constable examinations with physical preparation, regular tests and expert guidance.";

    }

    courseModal.classList.add("active");
    courseModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

    });

});


function closeCourseModal() {

    courseModal.classList.remove("active");
    courseModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

}


if (courseModalClose) {
    courseModalClose.addEventListener("click", closeCourseModal);
}


if (courseModalOverlay) {
    courseModalOverlay.addEventListener("click", closeCourseModal);
}
const courseModalApply = document.querySelector(".course-modal-apply");

if (courseModalApply) {
    courseModalApply.addEventListener("click", function (event) {
        event.preventDefault();

        closeCourseModal();

        setTimeout(function () {
            document.getElementById("admission-form").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    });
}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && courseModal.classList.contains("active")) {
        closeCourseModal();
    }

});
