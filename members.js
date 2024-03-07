let members = [
    {
        'name': 'Owen Hellum',
        'headshot': 'Owen_Hellum_Headshot.png',
        'website': 'https://omch.tech',
        'itch': 'https://omch.itch.io',
        'linkedin': 'https://linkedin.com/in/owen-hellum',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, blandit sed commodo vel, viverra ac sapien. Praesent pulvinar, urna in sodales consequat, dolor sem finibus magna, nec gravida velit odio sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ultricies.',
        'skills': 'Unity, C#, Blender, dialogue systems, C++'
    },
    {
        'name': 'Member Name',
        'headshot': '',
        'website': '',
        'itch': '',
        'linkedin': '',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, blandit sed commodo vel, viverra ac sapien. Praesent pulvinar, urna in sodales consequat, dolor sem finibus magna, nec gravida velit odio sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ultricies.',
        'skills': ''
    },
    {
        'name': 'Member Name',
        'headshot': '',
        'website': '',
        'itch': '',
        'linkedin': '',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor turpis, blandit sed commodo vel, viverra ac sapien. Praesent pulvinar, urna in sodales consequat, dolor sem finibus magna, nec gravida velit odio sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ultricies.',
        'skills': ''
    }
];

let members_parent;

window.onload = function () {
    members_parent = document.getElementById('members');

    for (let i in members) {
        let memberBox = createElement('div', 'flex_column start filled_box', '');
        members_parent.appendChild(memberBox);

        let titleBar = createElement('div', 'flex_row center', '');
        memberBox.appendChild(titleBar);

        titleBar.appendChild(createImage('images/' + members[i].headshot, ''));

        let name = createElement('div', 'flex_column start', '');
        titleBar.appendChild(name);

        name.appendChild(createElement('h2', '', members[i].name));

        let anchors = createElement('div', 'flex_row start', '');
        name.appendChild(anchors);

        if (members[i].website !== '') anchors.appendChild(createAnchor(members[i].website, 'row_anchor', 'Website'));
        if (members[i].itch !== '') anchors.appendChild(createAnchor(members[i].itch, 'row_anchor', 'Itch'));
        if (members[i].linkedin !== '') anchors.appendChild(createAnchor(members[i].linkedin, 'row_anchor', 'LinkedIn'));

        if (members[i].description !== '') memberBox.appendChild(createElement('p', '', '<br>' + members[i].description));
        memberBox.appendChild(createElement('p', '', '<br>Skills: ' + members[i].skills));
    }

    norefAnchors();
};

function createElement(tag, class_name, inner) {
    let temp = document.createElement(tag);
    if (class_name !== '') temp.setAttribute('class', class_name);
    temp.innerHTML = inner;

    return temp;
}

function createAnchor(href, class_name, inner) {
    let temp = createElement('a', class_name, inner);
    temp.setAttribute('href', href);

    return temp;
}

function createImage(src, class_name) {
    let temp = createElement('img', class_name, '');
    temp.setAttribute('src', src);

    return temp;
}

function norefAnchors() {
    let anchors = document.querySelectorAll('a');

    for (const i in anchors) {
        try {
            anchors[i].setAttribute('rel', 'noreferrer noopener');
            anchors[i].setAttribute('target', '_blank');
        }
        catch { }
    }
}