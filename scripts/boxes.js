function load_boxes(id, data, wide) {
    load_header();

    let parent = document.getElementById(id);

    for (let i in data) {
        let box = createElement('div', wide ? 'flex_column center wide_box' : 'flex_row center box', '');
        parent.appendChild(box);

        let left = box.appendChild(createElement('div', wide ? 'flex_column start bottom_margin' : 'flex_column start'));

        if (data[i].headshot !== '') left.appendChild(createImage('headshots/' + data[i].headshot, 'headshot'));

        let name_section = createElement('div', data[i].headshot !== '' ? 'flex_column start name' : 'flex_column start', '');
        left.appendChild(name_section);

        name_section.appendChild(createElement('h2', '', data[i].name));

        let anchors = createElement('div', 'flex_row start', '');
        name_section.appendChild(anchors);

        if (data[i].website !== '') anchors.appendChild(createAnchor(data[i].website, 'row_anchor', 'Website'));
        if (data[i].itch !== '') anchors.appendChild(createAnchor(data[i].itch, 'row_anchor', 'Itch'));
        if (data[i].linkedin !== '') anchors.appendChild(createAnchor(data[i].linkedin, 'row_anchor', 'LinkedIn'));

        if (data[i].description !== '') left.appendChild(createElement('p', '', '<br>' + data[i].description));
        if (data[i].skills !== '') left.appendChild(createElement('p', '', '<br>Skills: ' + data[i].skills));

        // TODO
        if (wide && data[i].images !== '' && data[i].images.length > 0) {
            let right = box.appendChild(createElement('div', wide ? 'flex_row center' : 'flex_column start'));

            for (let j in data[i].images) {
                let project_anchor = right.appendChild(createAnchor(data[i].images[j].url));
                project_anchor.appendChild(createImage('projects/' + data[i].images[j].image, wide ? 'project' : 'member_project'));
            }
        }
    }

    norefAnchors();
}