// Handle Privacy Policy Modal
document.addEventListener("DOMContentLoaded", () => {
    const privacyButton = document.getElementById("privacy-policy-button");
    const modal = document.getElementById("privacy-modal");
    const closeModal = document.getElementById("close-modal");
  
    // Open the modal
    privacyButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  
    // Close the modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close the modal if clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  