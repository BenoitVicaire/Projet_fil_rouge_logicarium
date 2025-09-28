// Element custom, remplace dans le HTML <main-footer> par ce bloc de code
class Main_footer extends HTMLElement {
    connectedCallback(){
    this.innerHTML = `
    <footer>
            <a href="#" id="legal">Legal mention</a>
            <a href="#" id="tos">Term of use</a>
            <a href="#" >Copyright</a>
            <a href="#" id="contact_support">Contact support</a>
        </footer>
    `
    }

}

customElements.define("main-footer",Main_footer)