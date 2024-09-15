document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.getElementById("open-modal-btnM").addEventListener("click", function() {
    document.getElementById("my-modalM").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnM").addEventListener("click", function() {
    document.getElementById("my-modalM").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalM").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalM .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalM").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.getElementById("open-modal-btnA").addEventListener("click", function() {
    document.getElementById("my-modalA").classList.add("open")

})

// Закрыть модальное окно
document.getElementById("close-my-modal-btnA").addEventListener("click", function() {
    document.getElementById("my-modalA").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modalA").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modalA .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modalA").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
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
