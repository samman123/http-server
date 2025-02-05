// Add event listeners to each game image
const imageItems = document.querySelectorAll('.image-item');
const gameDetailsSection = document.getElementById('game-details');

// Game details data
const gameDetails = {
  "Halo: Infinite": "Halo: Infinite is a first-person shooter game developed by 343 Industries. It continues the story of Master Chief and the fight against the Banished.",
  "Call of Duty: Modern Warfare": "Call of Duty: Modern Warfare is a reboot of the original Modern Warfare series, featuring intense multiplayer and a gripping single-player campaign.",
  "Doom Eternal": "Doom Eternal is a fast-paced first-person shooter where you play as the Doom Slayer, battling demons across dimensions.",
  "Overwatch 2": "Overwatch 2 is a team-based multiplayer first-person shooter that builds on the original Overwatch with new heroes, maps, and modes."
};

imageItems.forEach(item => {
  item.addEventListener('click', () => {
    const gameName = item.getAttribute('data-game');
    const details = gameDetails[gameName];
    gameDetailsSection.innerHTML = `<h2>${gameName}</h2><p>${details}</p>`;
  });
});