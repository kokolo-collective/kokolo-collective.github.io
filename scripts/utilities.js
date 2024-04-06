function createElement(tag, class_name = '', inner = '') {
    let temp = document.createElement(tag);
    if (class_name !== '') temp.setAttribute('class', class_name);
    temp.innerHTML = inner;

    return temp;
}

function createAnchor(href, class_name = '', inner = '') {
    let temp = createElement('a', class_name, inner);
    temp.setAttribute('href', href);

    return temp;
}

function createImage(src, class_name = '') {
    let temp = createElement('img', class_name, '');
    temp.setAttribute('src', src);

    return temp;
}

function random_skew(element, negative_range, positive_range, min) {
    let amount = -Math.floor(Math.random() * negative_range) + Math.floor(Math.random() * positive_range);
    if (amount >= 0 && amount < min) amount = min;
    if (amount < 0 && amount > -min) amount = -min;

    element.style.rotate = amount + 'deg';
}

function norefAnchors() {
    let anchors = document.querySelectorAll('a');

    for (const i in anchors) {
        let temp = anchors[i].classList;

        if (temp !== undefined && !temp.contains('ref')) {
            try {
                anchors[i].setAttribute('rel', 'noreferrer noopener');
                anchors[i].setAttribute('target', '_blank');
            }
            catch { }
        }
    }
}