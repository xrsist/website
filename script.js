var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = ".9px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "100px",
    duration: 0.8,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 3,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 3,
    },
});

// Get the "ABOUT US" text element
const aboutUsText = document.querySelector(".about-us-text");

// Add event listener for mouse movement
aboutUsText.addEventListener("mousemove", (e) => {
    // Get the bounding box of the text element
    const rect = aboutUsText.getBoundingClientRect();

    // Calculate the cursor's position relative to the text element
    const x = (e.clientX - rect.left) / rect.width; // Normalized X position (0 to 1)
    const y = (e.clientY - rect.top) / rect.height; // Normalized Y position (0 to 1)

    // Set the transform origin based on the cursor's position
    aboutUsText.style.transformOrigin = `${x * 100}% ${y * 100}%`;
});

// Reset the transform origin when the mouse leaves the text
aboutUsText.addEventListener("mouseleave", () => {
    aboutUsText.style.transformOrigin = "center"; // Reset to default
});

document.getElementById("arrow").addEventListener("click", function() {
    document.getElementById("page3").scrollIntoView({ behavior: "smooth" });
});

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    },
});

gsap.from(".card", {
    scale: 0.8,
    duration: .8,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    },
});

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5,
    },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 5,
    },
});

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 25%",
        end: "top 35%",
        scrub: 4,
    },
});
