const header = document.getElementById("obsc-header");

const page = (window.location.pathname.includes("index.html")) ? "pages/" : "";
const pageIndexHtml = (window.location.pathname.includes("index.html")) ? "" : "../";

const headerHTML = `
    <h1 id="obsc-title" class="text">Obscyra Design</h1>

    <nav id="obsc-header-navigation-bar">
        <ul>
            <li class="no-smartphone">
                <a href="${pageIndexHtml}index.html" class="text">Home</a>
            </li>
            <li class="no-smartphone">
                <a href="${page}about.html" class="text">About us</a>
            </li>
            <li class="no-smartphone">
                <a href="${page}services.html" class="text">Services</a>
            </li>
            <li class="no-smartphone">
                <a href="${page}contact.html" class="text">Contact us</a>
            </li>

            <li id="menu-button">
                <button id="hamburger-btn">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="6" width="18" height="2" fill="currentColor"/>
                        <rect x="3" y="11" width="18" height="2" fill="currentColor"/>
                        <rect x="3" y="16" width="18" height="2" fill="currentColor"/>
                    </svg>
                </button>
            </li>
        </ul>

        <ul id="smartphone-menu">
            <li>
                <a href="${pageIndexHtml}index.html" class="text">Home</a>
            </li>
            <li>
                <a href="${page}about.html" class="text">About us</a>
            </li>
            <li>
                <a href="${page}services.html" class="text">Services</a>
            </li>
            <li>
                <a href="${page}contact.html" class="text">Contact us</a>
            </li>
        </ul>
    </nav>
`;

header.innerHTML = headerHTML;

const hamburger = document.getElementById("hamburger-btn");
const menuButton = document.getElementById("menu-button");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        menuButton.classList.toggle("active");
    });
}
