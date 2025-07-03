document.addEventListener('DOMContentLoaded', function() {
    // --- Contact Form Validation ---
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('user-name');
            const emailInput = document.getElementById('user-email');
            let valid = true;
            let errorMsg = '';

            if (!nameInput.value.trim()) {
                valid = false;
                errorMsg += 'Name is required.\n';
                nameInput.style.borderColor = 'red';
            } else {
                nameInput.style.borderColor = '';
            }

            if (!emailInput.value.trim()) {
                valid = false;
                errorMsg += 'Email is required.\n';
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '';
            }

            if (!valid) {
                event.preventDefault();
                alert(errorMsg);
            } else {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                    contactElement.textContent = 'Form Submitted!';
                }
                console.log('Your form was submitted!');
            }
        });
    }

    // --- Hamburger Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');
    if (navToggle && navList) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', navList.classList.contains('open'));
        });
    }

    // --- Project Filter Feature ---
    const filterSelect = document.getElementById('project-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', function () {
            const value = this.value;
            document.querySelectorAll('.project-card').forEach(card => {
                if (value === 'all' || card.getAttribute('data-type') === value) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // --- Image Modal Feature ---
    function createImageModal() {
        if (!document.getElementById('img-modal')) {
            const modal = document.createElement('div');
            modal.id = 'img-modal';
            modal.className = 'img-modal'; // Use CSS for styling
            const img = document.createElement('img');
            img.id = 'img-modal-img';
            modal.appendChild(img);
            modal.addEventListener('click', function () {
                modal.style.visibility = 'hidden';
            });
            document.body.appendChild(modal);
        }
    }
    createImageModal();

    document.querySelectorAll('.project-card img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            const modal = document.getElementById('img-modal');
            const modalImg = document.getElementById('img-modal-img');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modal.style.visibility = 'visible';
        });
    });

    // --- Example AJAX Request (optional, for demo) ---
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});