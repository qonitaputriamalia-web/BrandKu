const ctaBtn = document.querySelector("#cta-btn"); //queryselector berfungsi untuk mencari id si komponen 
const ctaFeedback = document.querySelector("#cta-feedback");

let counter = 0;

ctaBtn.addEventListener("click", () => {
    counter++;
    console.log(counter);

    if (counter == 1) {
        ctaFeedback.classList.remove("hidden");
        ctaFeedback.textContent = "Halo harusnya muncul disini!!!";
    } else if (counter == 2) {
        ctaFeedback.textContent = "lalalalalalalaa";
    } else {
        ctaBtn.remove
    }
}); 