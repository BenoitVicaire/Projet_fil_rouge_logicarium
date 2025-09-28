class Main_header extends HTMLElement {
    connectedCallback(){
    this.innerHTML = `
    <header>
            <div class="header_top">
                <div class="header_top_left">
                    <div class="header_top_left_left">
                        <img src="public/images/Profil_pic.png" alt="Profil_picture" id="profil_pic">
                        <button class="switch_picture" id="switch_btn">Avatar</button> 

                        <div class="modal" id="profil_modal">
                            <div class="modal_content">
                                <span class="close">&times;</span>
                                <h3>Change Avatar</h3>
                                <div class="avatars">
                                    <img src="assets/images/avatar/avatar_1.png" alt="Trickster avatar" class="avatar_option">
                                    <img src="assets/images/avatar/avatar_2.png" alt="Witch avatar" class="avatar_option">
                                    <img src="assets/images/avatar/avatar_3.png" alt="Chieftain avatar" class="avatar_option">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header_top_left_right">
                        <button class="login">Login</button>
                        <button class="messages">Messages</button>
                        <button class="my_profil">My profil</button>                        
                    </div>
                </div>
                <div class="header_middle_logo">
                    <img src="assets/images/logos/Logicarium_v2.png" alt="Logo logicarium">
                </div>
                <div class="header_top_right">
                    <div class="langue">
                        <span id="language">Langue</span>
                        <div class="flags">
                            <button class="fi fi-gb active" id="flag_gb" aria-label="English"></button>
                            <button class="fi fi-fr" id="flag_fr"aria-label="French"></button>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <a href="pages/forum.html" id="forum">Forum</a>
                <a href="pages/protect_the_dungeon.html" id="ptd">Protect the dungeon</a>
                <a href="pages/contact.html" id="contact">Contact</a>
            </nav>
        </header>
    `
    }

}

customElements.define("main-header",Main_header)