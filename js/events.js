/* ========================================
   Events - Category Filtering
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('#eventFilters .filter-tag');
  const cards = document.querySelectorAll('#eventsGrid .card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;

      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
