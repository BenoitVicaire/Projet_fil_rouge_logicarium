class Main_header extends HTMLElement {
    connectedCallback(){
    this.innerHTML = `
    <header>
            <div class="header_top">
                <div class="header_top_left">
                    <div class="header_top_left_left">
                        <img src="public/images/Profil_pic.png" alt="Profil_picture" srcset="">
                        Switch Picture
                    </div>
                    <div class="header_top_left_right">
                        <div class="login">Login</div>
                        <div class="messages">Messages</div>
                        <div class="my_profil">Mon profil</div>                        
                    </div>
                </div>
                <div class="header_middle_logo">
                    <img src="assets/images/logos/Logicarium_v2 .png" alt="Logo logicarium">
                </div>
                <div class="header_top_right">
                    <div class="langue">
                        Langue
                        <span class="fi fi-gb"></span>
                        <span class="fi fi-fr"></span>
                    </div>
                </div>
            </div>
            <nav>
                <a href="pages/forum.html">Forum</a>
                <a href="pages/protect_the_dungeon.html">Protect the dungeon</a>
                <a href="pages/contact.html">Contact</a>
            </nav>
        </header>
    `
    }

}

customElements.define("main-header",Main_header)