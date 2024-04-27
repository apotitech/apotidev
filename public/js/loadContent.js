document.addEventListener('DOMContentLoaded', function() {
    // Load the header
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
      })
      .catch(error => console.error('Error loading the header:', error));
  
    // Load the footer
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
      })
      .catch(error => console.error('Error loading the footer:', error));
  });