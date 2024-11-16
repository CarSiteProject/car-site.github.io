document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  // Check for dark mode preference in localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    toggle.checked = true;
  }

  // Dark Mode Toggle
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', 'false');
    }
  });

  // Tab Switching Logic
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active class for tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const targetTab = button.dataset.tab;
      
      // Switch content based on active tab
      tabContents.forEach(content => {
        content.classList.remove('active');
        setTimeout(() => {
          if (content.id === targetTab) {
            content.classList.add('active');
          }
        }, 500); // Match the fade-in transition duration
      });
    });
  });
});
