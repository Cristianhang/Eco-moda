export function createFeaturedProducts() {
    const section = document.createElement('section');
    section.className = 'featured-products';
    section.innerHTML = `
        <h2>Productos Destacados</h2>
        <div class="product-grid">
            <div class="product-card">
                <img src="/images/products/featured-1.jpg" alt="Producto destacado 1" loading="lazy">
                <div class="product-info">
                    <h3>Chaqueta Elegante</h3>
                    <p class="price">$89.99</p>
                    <button class="add-to-cart" aria-label="Añadir al carrito">
                        <i class="fas fa-shopping-cart"></i> Añadir
                    </button>
                </div>
            </div>
            <div class="product-card">
                <img src="/images/products/featured-2.jpg" alt="Producto destacado 2" loading="lazy">
                <div class="product-info">
                    <h3>Vestido Casual</h3>
                    <p class="price">$59.99</p>
                    <button class="add-to-cart" aria-label="Añadir al carrito">
                        <i class="fas fa-shopping-cart"></i> Añadir
                    </button>
                </div>
            </div>
            <div class="product-card">
                <img src="/images/products/featured-3.jpg" alt="Producto destacado 3" loading="lazy">
                <div class="product-info">
                    <h3>Zapatos Deportivos</h3>
                    <p class="price">$79.99</p>
                    <button class="add-to-cart" aria-label="Añadir al carrito">
                        <i class="fas fa-shopping-cart"></i> Añadir
                    </button>
                </div>
            </div>
        </div>
    `;
    return section;
}