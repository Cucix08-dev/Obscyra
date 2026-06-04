const header = document.getElementById("obsc-header");
const page = (window.location.pathname.includes("index.html"))? "pages/":"";
const pageIndexHtml = (window.location.pathname.includes("index.html"))? "":"../";

const headerHTML = (
    `
    <h1 id="obsc-title" class="text">Obscyra Design</h1>
    <nav id="obsc-header-navigation-bar">
        <ul>
            <li>
                <a href="Obscyra/${pageIndexHtml}index.html" class="text">Home</a>
            </li>
            <li>
                <a href="Obscyra/${page}about.html" class="text">About us</a>
            </li>
            <li>
                <a href="Obscyra/${page}services.html" class="text">Services</a>
            </li>
            <li>
                <a href="Obscyra/${page}contact.html" class="text">Contact us</a>
            </li>
        </ul>
    </nav>
    `
);

header.innerHTML = headerHTML;