const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.querySelector(".bar-front");
const steps = document.querySelectorAll(".step");

let currentChecked = 1;

function updateStepProgress() {
    steps.forEach((step, idx) => {
        step.classList.toggle("checked", idx < currentChecked);
        step.innerHTML = idx < currentChecked
            ? `<i class="fas fa-check"></i><small>${idx === 0 ? "Start" : idx === steps.length - 1 ? "Final" : "Step " + (idx + 1)}</small>`
            : `<i class="fas fa-times"></i>`;
    });

    const progressPercentage = ((currentChecked - 1) / (steps.length - 1)) * 100;
    progress.style.width = `${progressPercentage}%`;

    prev.disabled = currentChecked === 1;
    next.disabled = currentChecked === steps.length;
}

next.addEventListener("click", () => {
    if (currentChecked < steps.length) {
        currentChecked++;
        updateStepProgress();
    }
});

prev.addEventListener("click", () => {
    if (currentChecked > 1) {
        currentChecked--;
        updateStepProgress();
    }
});

updateStepProgress();