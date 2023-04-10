document.addEventListener("DOMContentLoaded", function () {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close");

    function openModal(event) {
        const button = event.target;
        const modalId = button.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId);

        modal.style.display = "block";
    }

    function closeModal(event) {
        const closeButton = event.target;
        const modal = closeButton.closest(".modal");

        modal.style.display = "none";
    }

    function outsideClick(event) {
        const modal = event.target;

        if (modal.classList.contains("modal")) {
            closeModal(event);
        }
    }

    openModalButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });
    closeButtons.forEach((button) => {
        button.addEventListener("click", closeModal);
    });
    window.addEventListener("click", outsideClick);
});
