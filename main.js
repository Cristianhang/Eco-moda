document.addEventListener('DOMContentLoaded', () => {
    
    const audioPlayer = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');
    let isPlaying = false;

    toggleButton.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            toggleButton.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            audioPlayer.play();
            toggleButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navCenter.classList.toggle('show');
    });

   
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            
           
            button.textContent = '¡Añadido!';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir';
                button.disabled = false;
            }, 2000);
        });
    });

   
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Optimización de imágenes
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('lazy-image');
        imageObserver.observe(img);
    });

    // Función para ajustar el tamaño de las imágenes de productos
    function adjustProductImages() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const img = card.querySelector('img');
            if (img) {
                const container = card.querySelector('.product-image-container');
                if (container) {
                    const containerWidth = container.offsetWidth;
                    img.style.height = `${containerWidth}px`;
                }
            }
        });
    }

    // Ajustar imágenes al cargar y al cambiar el tamaño de la ventana
    adjustProductImages();
    window.addEventListener('resize', adjustProductImages);

    // Audio functionality
    const audioPlayer = document.getElementById('background-music');
    const toggleButton = document.getElementById('toggle-music');
    let isPlaying = false;

    if (toggleButton && audioPlayer) {
        toggleButton.addEventListener('click', () => {
            if (isPlaying) {
                audioPlayer.pause();
                toggleButton.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                audioPlayer.play();
                toggleButton.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
    }

    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');
    
    if (menuToggle && navCenter) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navCenter.classList.toggle('show');
        });
    }

    // Animación del carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const button = e.target.closest('.add-to-cart');
            button.classList.add('adding');
            setTimeout(() => {
                button.classList.remove('adding');
                button.innerHTML = '<i class="fas fa-check"></i> Añadido';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir';
                }, 1500);
            }, 1000);
        });
    });
});