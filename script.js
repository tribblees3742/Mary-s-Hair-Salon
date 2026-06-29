// Mary's Hair Salon - JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mary's Information
const maryInfo = {
    name: 'Mary Williams',
    age: 37,
    education: 'Degree in Accountancy',
    location: 'Chester, Pennsylvania',
    email: 'marywillaim012@gmail.com'
};

// Log info on page load
window.addEventListener('DOMContentLoaded', () => {
    console.log('Mary\'s Hair Salon Website Loaded');
    console.log('Contact: ' + maryInfo.email);
});
