"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");
const showButtons = document.querySelectorAll(".show-modal");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");

// فتح النافذة وعرض محتوى الزر المختار
function openModal(button) {
  modalTitle.textContent = button.dataset.title;
  modalText.textContent = button.dataset.text;

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// إغلاق النافذة
function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// كل Button يفتح النافذة بمحتواه
showButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    openModal(button);
  });
});

// الإغلاق بزر × أو بالنقر على الخلفية
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// الإغلاق بزر Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});