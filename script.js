document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('dark-mode-toggle');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Dark Mode Toggle
    toggle.addEventListener('change', () => {
      document.body.classList.toggle('dark-mode');
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
  