async function menu() {
    let list = document.getElementById("menu_btn")

    if (list.style.display == "none") {
        list.style.display = "flex"
    } else {
        list.style.display = "none"
    }
}