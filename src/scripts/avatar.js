const switchBtn = document.getElementById("switch_btn");
const modal = document.getElementById("profil_modal");
const closeBtn = modal.querySelector(".close");
const profilePic = document.getElementById("profil_pic");
const avatarOptions = document.querySelectorAll(".avatar_option");

// Ouvrir
switchBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
// Fermer
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (!modal.contains(e.target) && e.target !== switchBtn) {
        modal.style.display = "none";
    }
});

avatarOptions.forEach(avatar => {
    avatar.addEventListener("click", () => {
        profilePic.src = avatar.src;
        modal.style.display = "none"; // fermer la modale
    });
});
