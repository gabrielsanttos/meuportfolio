function menuMobile() {
    let menuArea = document.getElementById('menu_area')

    if (menuArea.style.width == '200px') {
        menuArea.style.width = '0px'
    } else {
        menuArea.style.width = '200px'
    }
}