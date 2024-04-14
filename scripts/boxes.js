function load_boxes(id, data, wide) {
    load_header_and_footer();

    let parent = document.getElementById(id);

    let left_column = parent.appendChild(createElement('div', 'flex_column start'));
    let right_column = parent.appendChild(createElement('div', 'flex_column start'));
    let right = false;

    data = shuffle_array(data);

    for (let i in data) {
        let column_parent = right ? right_column : left_column;
        let box = column_parent.appendChild(createElement('div', wide ? 'flex_column center wide_box' : 'flex_row center box', ''));

        let left = box.appendChild(createElement('div', wide ? 'flex_column start bottom_margin' : 'flex_column start'));

        if (data[i].headshot !== '') left.appendChild(createImage('headshots/' + data[i].headshot, 'headshot'));

        let name_section = createElement('div', data[i].headshot !== '' ? 'flex_column start name' : 'flex_column start', '');
        left.appendChild(name_section);

        name_section.appendChild(createElement('h2', '', data[i].name));

        if (data[i].pronouns !== '') name_section.appendChild(createElement('p', '', '(' + data[i].pronouns + ')'));

        let anchors = createElement('div', 'flex_row start', '');
        name_section.appendChild(anchors);

        for (let j in data[i].links)
            anchors.appendChild(createAnchor(data[i].links[j].url, 'row_anchor', data[i].links[j].name));

        if (data[i].description !== '') left.appendChild(createElement('p', '', '<br>' + data[i].description));
        if (data[i].skills !== '') left.appendChild(createElement('p', '', '<br>Skills: <strong>' + data[i].skills + '</strong>'));

        // TODO
        if (wide && data[i].images !== '' && data[i].images.length > 0) {
            let right = box.appendChild(createElement('div', wide ? 'flex_row center' : 'flex_column start'));

            for (let k in data[i].images) {
                let project_anchor = right.appendChild(createAnchor(data[i].images[k].url));
                project_anchor.appendChild(createImage('projects/' + data[i].images[k].image, wide ? 'project' : 'member_project'));
            }
        }

        right = !right;
    }

    norefAnchors();
}