function menu() {
    let list = document.getElementById("header_menu_list")

    if (list.style.display == "none") {
        list.style.display = "flex"
    } else {
        list.style.display = "none"
    }
}