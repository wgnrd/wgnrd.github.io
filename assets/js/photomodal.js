// Photo modal functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get all photo cards
  const photoCards = document.querySelectorAll('.photos .card');
  
  // Create modal structure
  const modal = document.createElement('div');
  modal.className = 'photo_modal';
  modal.innerHTML = `
    <span class="photo_modal_close">&times;</span>
    <img class="photo_modal_image" src="" alt="" />
    <div class="photo_modal_info">
      <div class="photo_modal_date"></div>
      <div class="photo_modal_description"></div>
    </div>
  `;
  document.body.appendChild(modal);
  
  const modalImage = modal.querySelector('.photo_modal_image');
  const modalDate = modal.querySelector('.photo_modal_date');
  const modalDescription = modal.querySelector('.photo_modal_description');
  const modalClose = modal.querySelector('.photo_modal_close');
  
  // Open modal on card click
  photoCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function() {
      const img = card.querySelector('.card_image');
      const date = card.querySelector('.card_date');
      const description = card.querySelector('.card_text');
      
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modalDate.textContent = date.textContent;
      modalDescription.textContent = description.textContent;
      
      modal.classList.add('photo_modal_active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });
  
  // Close modal
  function closeModal() {
    modal.classList.remove('photo_modal_active');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  modalClose.addEventListener('click', closeModal);
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('photo_modal_active')) {
      closeModal();
    }
  });
});
