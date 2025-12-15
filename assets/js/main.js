document.addEventListener("DOMContentLoaded", () => {
    // Simple testimonial carousel
    let index = 0;
    const slides = document.querySelectorAll(".testimonial-item");
    function rotate() {
        slides.forEach(s => s.style.display = "none");
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
    }
    if (slides.length > 0) setInterval(rotate, 4000);
    rotate();

    // Multi-step application form
    let step = 1;
    const steps = document.querySelectorAll(".step");
    const nextBtns = document.querySelectorAll(".next-step");
    const prevBtns = document.querySelectorAll(".prev-step");

    nextBtns.forEach(btn => btn.addEventListener("click", () => changeStep(1)));
    prevBtns.forEach(btn => btn.addEventListener("click", () => changeStep(-1)));

    function changeStep(n) {
        steps[step-1].style.display = "none";
        step += n;
        if (step < 1) step = 1;
        if (step > steps.length) step = steps.length;
        steps[step-1].style.display = "block";
    }
});
