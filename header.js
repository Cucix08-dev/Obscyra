const header = document.getElementById("obsc-header");

const headerHTML = (
    `
    <h1 id="obsc-title" class="text">Obscyra Design</h1>
    <nav id="obsc-header-navigation-bar">
        <ul>
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="about.html">About us</a>
            </li>
            <li>
                <a href="services.html">Services</a>
            </li>
        </ul>
    </nav>
    `
);

header.innerHTML = headerHTML;