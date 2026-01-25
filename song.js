document.querySelectorAll(".song-card").forEach(card => {
    const audio = card.querySelector(".audio-player");
    const playBtn = card.querySelector(".play-btn");
    const pauseBtn = card.querySelector(".pause-btn");
    const slider = card.querySelector(".seek-slider");
    const select = card.querySelector(".version-select");
    const desc = card.querySelector(".version-desc");

    // dropdown
    if (select) {
        audio.src = select.value;
        desc.textContent = select.selectedOptions[0].dataset.desc;
    }

    select.addEventListener("change", () => {
            audio.pause();
            audio.src = select.value;
            audio.load();
            audio.play();

            desc.textContent = select.selectedOptions[0].dataset.desc;
        });

    playBtn.addEventListener("click", () => audio.play());
    pauseBtn.addEventListener("click", () => audio.pause());

    audio.addEventListener("timeupdate", () => {
        slider.value = (audio.currentTime / audio.duration) * 100;
    });

    slider.addEventListener("input", () => {
        audio.currentTime = (slider.value / 100) * audio.duration;
    });
});