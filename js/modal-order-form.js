(() => {
    const refs = {
      openModalBtn: document.querySelector("[open-order-modal-form]"),
      closeModalBtn: document.querySelector("[close-order-modal-form]"),
      modalDiv: document.querySelector("[order-modal-form]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalDiv.classList.toggle("is-open");
    }
  })();