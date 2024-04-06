function load_header() {
    let header = document.getElementById('header');

    header.appendChild(createElement('h1', '', 'Kokolo Game-Art Collective'));
    header.appendChild(createElement('h3', '', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, blandit sed commodo vel, viverra ac sapien.'));

    let menu_bar = header.appendChild(createElement('div', 'flex_row center'));

    let members = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    members.appendChild(createAnchor('index.html', 'ref', 'Members'));
    random_skew(members, 6, 6, 3);

    let values = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    values.appendChild(createAnchor('values.html', 'ref', 'Values'));
    random_skew(values, 6, 6, 3);

    let projects = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    projects.appendChild(createAnchor('projects.html', 'ref', 'Projects'));
    random_skew(projects, 6, 6, 3);

    let emerging_project = menu_bar.appendChild(createElement('h2', 'menu_bar'));
    emerging_project.appendChild(createAnchor('emerging_project.html', 'ref', '<i>Emerging Project</i> application'));
    random_skew(emerging_project, 3, 3, 1.5);
}