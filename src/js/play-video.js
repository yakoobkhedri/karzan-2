// video player

const playerVideos = Array.from(document.querySelectorAll(".player-video"));
const playerButtons = Array.from(document.querySelectorAll(".player-button"));

playerButtons.forEach((playerButton, index) => {
  const playerVideo = playerVideos[index];

  playerButton.addEventListener("click", () => {
    playerVideo.play();
    playerVideo.setAttribute("controls", "");
  });

  playerVideo.addEventListener("play", () => {
    playerButton.style.visibility = "hidden";
    playerButton.style.opacity = "0";
  });

  playerVideo.addEventListener("pause", () => {
    playerButton.style.visibility = "visible";
    playerButton.style.opacity = "1";
  });
});