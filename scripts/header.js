function load_header_and_footer() {
    load_header();
    load_footer();
}

function load_header() {
    let header = document.getElementById('header');

    header.appendChild(createElement('h1', '', 'Kokolo Game-Art Collective'));
    header.appendChild(createElement('h3', '', 'Technical, artistic, and cultural game-making group/community'));

    let menu_bar = header.appendChild(createElement('div', 'flex_row center'));

    let members = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    members.appendChild(createAnchor('index.html', 'ref', 'Members'));
    random_skew(members, 6, 6, 3);

    let contact = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    contact.appendChild(createAnchor('contact.html', 'ref', 'Contact'));
    random_skew(contact, 6, 6, 3);

    let values = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    values.appendChild(createAnchor('values.html', 'ref', 'Values'));
    random_skew(values, 6, 6, 3);

    let projects = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    projects.appendChild(createAnchor('projects.html', 'ref', 'Projects'));
    random_skew(projects, 6, 6, 3);

    let events = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    events.appendChild(createAnchor('events.html', 'ref', 'Events'));
    random_skew(events, 6, 6, 3);
}

function load_footer() {
    let footer = document.getElementById('footer');

    footer.appendChild(createElement('p', '', 'Kokolo Game-Art Collective © 2024'));
    footer.appendChild(createElement('p', '', '<i>Designed and developed by <a href="https://omch.tech">Owen Hellum</a>.</i>'));
    footer.appendChild(createElement('p', '', '<i>Some animations made possible using <a href="https://animate.style/">Animate.css</a>.</i>'));
}