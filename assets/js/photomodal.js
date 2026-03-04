// Photo modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const photoCards = document.querySelectorAll('.photos .card');

  const modal = document.createElement('div');
  modal.className = 'photo_modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Photo preview');
  modal.innerHTML = `
    <button class="photo_modal_close" aria-label="Close photo preview">&times;</button>
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

  function openModal(card) {
    const img = card.querySelector('.card_image');
    const date = card.querySelector('.card_date');
    const description = card.querySelector('.card_text');

    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalDate.textContent = date.textContent;
    modalDescription.textContent = description.textContent;

    modal.classList.add('photo_modal_active');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('photo_modal_active');
    document.body.style.overflow = '';
  }

  photoCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Open photo preview');

    card.addEventListener('click', function() {
      openModal(card);
    });

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('photo_modal_active')) {
      closeModal();
    }
  });
});
