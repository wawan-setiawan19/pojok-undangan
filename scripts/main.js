// Aktivasi Fungsionalitas Materialize JS
M.AutoInit();

// Ambil elemen Navigasi
const navElement = document.querySelector(".nav-wrapper");

// ambil nilai scrolling
let scrollValue = 0;
document.addEventListener("scroll", (e) => {
    scrollValue = window.scrollY;

    scrollValue > 20
        ? ubahBackgroundNavigasi("#009688", true)
        : ubahBackgroundNavigasi("transparent", false);
});

const ubahBackgroundNavigasi = (color, status) => {
    navElement.style.background = color;
    status == true
        ? (navElement.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)")
        : (navElement.style.boxShadow = "none");
};
