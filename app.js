let status = "close"

function accourdion(a) {
    let icon = a.querySelector('.mycssIcon img')
    let content = a.querySelector(".mycss7")

    if (a.classList.contains("cssClose")) {
        a.classList.replace('cssClose', 'cssOpen')
        icon.src = "./assets/images/icon-minus.svg"
        content.style.display = "block";
    }
    else {
        a.classList.replace('cssOpen', 'cssClose')
        icon.src = "./assets/images/icon-plus.svg"
        content.style.display = "none";
    }
}