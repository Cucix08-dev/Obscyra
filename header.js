const header = document.getElementById("obsc-header");

const headerHTML = (
    `
    <h1 id="obsc-title" class="text">Obscyra Design</h1>
    <nav id="obsc-header-navigation-bar">
        <ul>
            <li>
                <a href="index.html" class="text">Home</a>
            </li>
            <li>
                <a href="about.html" class="text">About us</a>
            </li>
            <li>
                <a href="services.html" class="text">Services</a>
            </li>
        </ul>
    </nav>
    `
);

header.innerHTML = headerHTML;