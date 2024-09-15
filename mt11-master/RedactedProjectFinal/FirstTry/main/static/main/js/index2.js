document.getElementById("panfilov@bmstu.ru").addEventListener("click", function() {
    document.getElementById("my-modalPa").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnPa").addEventListener("click", function() {
    document.getElementById("my-modalPa").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalPa").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalPa .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalPa").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});



document.getElementById("mikhailov@bmstu.ru").addEventListener("click", function() {
    document.getElementById("my-modalMi").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnMi").addEventListener("click", function() {
    document.getElementById("my-modalMi").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalMi").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalMi .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalMi").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});





document.getElementById("deulin@bmstu.ru").addEventListener("click", function() {
    document.getElementById("my-modalDe").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnDe").addEventListener("click", function() {
    document.getElementById("my-modalDe").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalDe").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalDe .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalDe").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});






document.getElementById("belikov@bmstu.ru").addEventListener("click", function() {
    document.getElementById("my-modalBe").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnBe").addEventListener("click", function() {
    document.getElementById("my-modalBe").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalBe").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalBe .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalBe").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});