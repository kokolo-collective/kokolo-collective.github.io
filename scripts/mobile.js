if (screen.width <= 450) {
    let mobile_style = document.createElement('link');
    mobile_style.setAttribute('rel', 'stylesheet');
    mobile_style.setAttribute('href', 'mobile.css');

    document.head.appendChild(mobile_style);
}