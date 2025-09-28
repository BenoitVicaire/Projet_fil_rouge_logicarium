import '../../assets/style/style.css'
import './element_html/header.js'
import './element_html/footer.js'
import { setLanguage } from './langue.js'
import './avatar.js'

// Langue active : 
const flags = document.querySelectorAll(".langue button");

flags.forEach(btn => {
    btn.addEventListener("click", ()=>{
        flags.forEach(flag=>flag.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Change la langue au clic :
document.getElementById("flag_fr").addEventListener("click", () => setLanguage("fr"));
document.getElementById("flag_gb").addEventListener("click", () => setLanguage("gb"));