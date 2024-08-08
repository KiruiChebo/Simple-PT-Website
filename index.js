// Select the necessary elements
const servicesGrid = document.querySelector('.service-grid');
const serviceLinks = document.querySelectorAll('.service-link a');
const serviceDetails = document.querySelectorAll('.service-item > p');

// Add event listeners to service links
serviceLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    serviceDetails.forEach((detail, i) => {
      if (i === index) {
        detail.style.display = 'block';
      } else {
        detail.style.display = 'none';
      }
    });
  });
});

// Close the service details when clicking outside the service grid
document.addEventListener('click', (e) => {
  if (!servicesGrid.contains(e.target)) {
    serviceDetails.forEach((detail) => {
      detail.style.display = 'none';
    });
  }
});

// Smooth scrolling
const navLinks = document.querySelectorAll('#main-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});