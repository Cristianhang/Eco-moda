export function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Marcas Destacadas</h3>
                <div class="brand-logos">
                    <img src="/images/brands/brand-1.png" alt="Marca 1" loading="lazy">
                    <img src="/images/brands/brand-2.png" alt="Marca 2" loading="lazy">
                    <img src="/images/brands/brand-3.png" alt="Marca 3" loading="lazy">
                    <img src="/images/brands/brand-4.png" alt="Marca 4" loading="lazy">
                </div>
            </div>
        </div>
    `;
    return footer;
}