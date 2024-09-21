const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const meneBtnIcon = menuBtn.querySelector("i")

// Lắng nghe sự kiện khi click vào icon menu.
meneBtnIcon.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")
    
    // Kiểm tra class navLinks có chứa open kh.
    const isOpen = navLinks.classList.contains("open")

    // Nếu có open thì đóng menu, ngược lại.
    meneBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    meneBtnIcon.setAttribute("class", "ri-menu-line")
})

const scrollRevealOption = {
    distance: "50px", // phần tử sẽ di chuyển 50px khi hiệu ứng xuất hiện
    origin: "bottom",
    duration: 1000, 
}

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".header__links", {
    ...scrollRevealOption,
    delay: 1500,
})

ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
    interval: 500,
})

ScrollReveal().reveal(".service__image img", {
    ...scrollRevealOption,
    origin: "left",
})

ScrollReveal().reveal(".service__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
})


ScrollReveal().reveal(".experience__card", {
   duration: 1000,
    interval: 500,
})

ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
})

ScrollReveal().reveal(".download__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".download__content p", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1500,
})