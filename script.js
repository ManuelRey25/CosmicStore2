// Función para ir arriba de la página
function irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function() {
    const botonArriba = document.getElementById('boton-arriba');
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
        botonArriba.classList.add("mostrar");
    } else {
        botonArriba.classList.remove("mostrar");
    }
};

// LOGO DEL MENU
document.addEventListener('DOMContentLoaded', function() {
    var logoImage = document.getElementById('logoImage');
    var logoContainer = document.getElementById('logoContainer');

    logoImage.addEventListener('click', function(event) {
        event.preventDefault();
        logoContainer.classList.add('logo-hidden');
        
        // Hace que el logo reaparezca después de 6 segundos
        setTimeout(function() {
            logoContainer.classList.remove('logo-hidden');
        }, 6000);
    });
});

// TIENDAAAA

const productos = [
    { id: 1, nombre: "Telescopio Espacial", precio: 599.99, imagen: "img/telescopio.jpg" },
    { id: 2, nombre: "Modelo de Cohete SpaceX", precio: 149.99, imagen: "img/cohete.jpg" },
    { id: 3, nombre: "Globo Terráqueo 3D", precio: 79.99, imagen: "img/globo.jpg" },
    { id: 4, nombre: "Telescopio Espacial 2", precio: 599.99, imagen: "img/telescopio2.jpg" },
    { id: 5, nombre: "Espectaculares libros", precio: 154.99, imagen: "img/libros.jpg" },
    { id: 6, nombre: "Modelo de Cohete SpaceX 2", precio: 149.99, imagen: "img/cohete2.jpg" },
    { id: 7, nombre: "Globo Terráqueo 3D 2", precio: 179.99, imagen: "img/globo2.jpg" },
    { id: 8, nombre: "Traje de astronauta", precio: 224.99, imagen: "img/astronauta.jpg" },
];

// Carrito de compras
let carrito = [];

// Función para mostrar productos
function mostrarProductos() {
    const contenedor = document.querySelector('.producto-grid');
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-content">
                <h3 class="producto-title">${producto.nombre}</h3>
                <p class="producto-price">$${producto.precio.toFixed(2)}</p>
                <p class="descripcion" style="display: none;">${producto.nombre} es un producto único relacionado con la exploración espacial.</p>
                <button class="boton-comprar" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
        productoElement.addEventListener('click', expandirImagen);
        contenedor.appendChild(productoElement);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
        total += producto.precio;
    });

    totalCarrito.textContent = `$${total.toFixed(2)}`;
}
// Eliminar del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para comprar
function comprar() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Por favor, agrega algunos productos.');
        return;
    }
    
    alert('¡Gracias por tu compra! Te enviaremos los productos seleccionados a la brevedad.');
    carrito = [];
    actualizarCarrito();
}

// Función para ir arriba
function irArriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    
    
    const botonComprar = document.getElementById('comprar');
    if (botonComprar) {
        botonComprar.addEventListener('click', comprar);
    }
    
    
    const botonArriba = document.getElementById('boton-arriba');
    if (botonArriba) {
        botonArriba.addEventListener('click', irArriba);
        
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                botonArriba.style.display = 'block';
            } else {
                botonArriba.style.display = 'none';
            }
        });
    }
});


function expandirImagen(event) {
    const tarjeta = event.currentTarget;

    
    tarjeta.classList.toggle('expandida');

    
    if (tarjeta.classList.contains('expandida')) {
        const descripcion = tarjeta.querySelector('.descripcion');
        if (descripcion) descripcion.style.display = 'block';
    } else {
        const descripcion = tarjeta.querySelector('.descripcion');
        if (descripcion) descripcion.style.display = 'none';
    }
}

// Función para mostrar productos con evento de clic añadido
function mostrarProductos() {
    const contenedor = document.querySelector('.producto-grid');
    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-content">
                <h3 class="producto-title">${producto.nombre}</h3>
                <p class="producto-price">$${producto.precio.toFixed(2)}</p>
                <p class="producto-description" style="display: none;">Descripción: Producto espacial increíble.</p>
                <button class="boton-comprar" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;
        
        productoElement.addEventListener('click', expandirTarjeta);
        contenedor.appendChild(productoElement);
    });
}


function expandirTarjeta(event) {
    const tarjeta = event.currentTarget;

    
    if (tarjeta.classList.contains('expandida')) {
        tarjeta.classList.remove('expandida'); 
        return; 
    }

    
    tarjeta.classList.add('expandida'); 

    
    setTimeout(() => {
        tarjeta.classList.remove('expandida');
    }, 3000);
}

 // COMENTARIOSSS

function validateForm(event) {
    
    event.preventDefault();
    
    
    const requiredFields = {
        'name': 'Nombre',
        'email': 'Correo Electrónico',
        'subject': 'Asunto',
        'comment': 'Comentario'
    };
    
    let isValid = true;
    let emptyFields = [];

    
    for (let [fieldId, fieldName] of Object.entries(requiredFields)) {
        const field = form.elements[fieldId];
        if (!field.value.trim()) {
            isValid = false;
            emptyFields.push(fieldName);
        }
    }

    
    const queryType = form.querySelector('input[name="query_type"]:checked');
    if (!queryType) {
        isValid = false;
        emptyFields.push('Tipo de consulta');
    }

    
    const terms = form.elements['terms'];
    if (!terms.checked) {
        isValid = false;
        emptyFields.push('Términos y condiciones');
    }

    
    const email = form.elements['email'].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        isValid = false;
        console.log('Error: El formato del correo electrónico no es válido');
        return;
    }

    
    const phone = form.elements['phone'].value;
    if (phone) {
        const phoneRegex = /^\d{9}$/;  
        if (!phoneRegex.test(phone)) {
            isValid = false;
            console.log('Error: El formato del número de teléfono no es válido');
            return;
        }
    }

    
    if (!isValid) {
        console.log('Error: Los siguientes campos son obligatorios:', emptyFields.join(', '));
    } else {
        console.log('Éxito: Todos los campos requeridos están completos');
        form.submit(); 
    }
}





// OFERTAS
document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        {
            id: 1,
            badge: "Más Vendido",
            imgSrc: "img/telescopio6.jpg",
            imgAlt: "Telescopio Profesional X-3000",
            title: "Telescopio Profesional X-3000",
            description: "Explora las estrellas con una claridad sin precedentes. Óptica de alta precisión con lentes multicapa y montura estable para observaciones astronómicas detalladas.",
            shortDescription: "Telescopio profesional con óptica de alta precisión para observaciones astronómicas.",
            rating: "★★★★★",
            reviews: "(128 reseñas)",
            currentPrice: 599.99,
            originalPrice: 799.99
        },
        {
            id: 2,
            badge: "Nuevo",
            imgSrc: "img/calcos2.jpg",
            imgAlt: "Meteorito Lunar Certificado",
            title: "Calcomanías del Espacio",
            description: "Fragmento auténtico de la Luna con certificación NASA. Colección de calcomanías inspiradas en la exploración espacial para entusiastas y coleccionistas.",
            shortDescription: "Calcomanías espaciales con certificación NASA para coleccionistas.",
            rating: "★★★★☆",
            reviews: "(84 reseñas)",
            currentPrice: 299.99,
            originalPrice: 600
        },
        {
            id: 3,
            badge: "Oferta",
            imgSrc: "img/Astronauta1.jpg",
            imgAlt: "Traje Espacial Réplica",
            title: "Traje Espacial Réplica",
            description: "Réplica exacta del traje usado en la ISS",
            shortDescription: "Calcomanías espaciales con certificación NASA para coleccionistas.",
            rating: "★★★★☆",
            reviews: "(84 reseñas)",
            currentPrice: 5000.99,
            originalPrice: 8000.78
        },
        {
            id: 4,
            badge: "Nuevo Libro",
            imgSrc: "img/libro6.jpg",
            imgAlt: "Nuevo Libro Astronómico",
            title: "Nuevo Libro Astronómico",
            description: "Explora los misterios del universo",
            shortDescription: "Calcomanías espaciales con certificación NASA para coleccionistas.",
            rating: "★★★★☆",
            reviews: "(84 reseñas)",
            currentPrice: 799.99,
            originalPrice: null
        },
        {
            id: 5,
            badge: "Nuevo Indumentaria",
            imgSrc: "img/short.jpg",
            imgAlt: "Short de Baño Espacial",
            title: "Short de Baño Espacial",
            description: "Los Mejores Short de Baño para Hombres",
            shortDescription: "Calcomanías espaciales con certificación NASA para coleccionistas.",
            rating: "★★★★☆",
            reviews: "(84 reseñas)",
            currentPrice: 299.99,
            originalPrice: 459.99
        },
        {
            id: 6,
            badge: "Oferta Indumentaria",
            imgSrc: "img/vestido1.jpg",
            imgAlt: "Nuevo vestido de Colección",
            title: "Nuevo Vestido de Colección",
            description: "Vestido Temporada Verano",
            shortDescription: "Calcomanías espaciales con certificación NASA para coleccionistas.",
            rating: "★★★★☆",
            reviews: "(84 reseñas)",
            currentPrice: 1999.99,
            originalPrice: 2800.99
        },
  
    ];

    const productGrid = document.querySelector(".product-grid");
    const carritoContainer = document.querySelector(".carrito-container");
    const totalCarritoElement = document.createElement("div");
    totalCarritoElement.classList.add("total-carrito");
    carritoContainer.appendChild(totalCarritoElement);

    // Renderizar productos
    function renderizarProductos() {
        productGrid.innerHTML = ""; 
        productos.forEach((producto, index) => {
            const productCard = document.createElement("article");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
            <div class="product-badge">${producto.badge}</div>
            <img src="${producto.imgSrc}" alt="${producto.imgAlt}" class="product-image" data-index="${index}">
            <div class="product-info">
                <h3>${producto.title}</h3>
                <p class="product-description">${producto.description}</p>
                <div class="price-container">
                    <div class="current-price">$${producto.currentPrice.toFixed(2)}</div>
                    ${producto.originalPrice ? `<div class="original-price">$${producto.originalPrice.toFixed(2)}</div>` : ''}
                </div>
                <div class="quantity-container">
                    <div class="quantity-control">
                        <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
                        <input type="number" class="quantity-input" data-index="${index}" value="1" min="1" max="10">
                        <button class="quantity-btn increase-btn" data-index="${index}">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-index="${index}">Añadir al Carrito</button>
                </div>
            </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Carrito de compras
    const carrito = [];

    // Actualizar contenido del carrito
    function actualizarCarrito() {
        carritoContainer.innerHTML = ""; // Limpiar contenedor
        carritoContainer.appendChild(totalCarritoElement);

        if (carrito.length === 0) {
            carritoContainer.innerHTML = "<p>No hay productos en el carrito</p>";
            totalCarritoElement.textContent = "";
        } else {
            let totalCarrito = 0;
            carrito.forEach((item, index) => {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                const subtotal = item.cantidad * item.producto.currentPrice;
                cartItem.innerHTML = `
                    <div class="cart-item-details">
                        <p class="cart-item-title">${item.producto.title}</p>
                        <p class="cart-item-price cart-price-white">
                            ${item.cantidad} x $${item.producto.currentPrice.toFixed(2)} = 
                            $${subtotal.toFixed(2)}
                        </p>
                        <button class="remove-from-cart-btn filter-btn" data-index="${index}">
                            Eliminar
                        </button>
                    </div>
                `;
                carritoContainer.appendChild(cartItem);
                totalCarrito += subtotal;
            });

            // Actualizar total del carrito
            totalCarritoElement.innerHTML = `
                <div class="carrito-total cart-price-white">
                    <strong>Total del Carrito:</strong> $${totalCarrito.toFixed(2)}
                </div>
            `;
        }
    }

    
    function mostrarDetallesProducto(producto) {
        const detailsModal = document.createElement("div");
        detailsModal.classList.add("product-details-modal");
        detailsModal.innerHTML = `
            <div class="product-details-content">
                <button class="close-details-modal">&times;</button>
                <div class="details-image-container">
                    <img src="${producto.imgSrc}" alt="${producto.imgAlt}" class="details-large-image">
                </div>
                <div class="details-info">
                    <h2>${producto.title}</h2>
                    <p class="details-description">${producto.description}</p>
                    <div class="details-rating">
                        ${producto.rating} ${producto.reviews}
                    </div>
                    <div class="details-pricing">
                        <span class="current-price">$${producto.currentPrice.toFixed(2)}</span>
                        ${producto.originalPrice ? `<span class="original-price">$${producto.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(detailsModal);

        
        document.body.classList.add('modal-open');

        
        const closeModalBtn = detailsModal.querySelector('.close-details-modal');
        closeModalBtn.addEventListener('click', () => {
            document.body.removeChild(detailsModal);
            document.body.classList.remove('modal-open');
        });
    }

    // Eventos de inicialización
    renderizarProductos();

    // Delegación de eventos para control de cantidad
    productGrid.addEventListener("click", (e) => {
        const productCard = e.target.closest('.product-card');
        const quantityInput = productCard.querySelector('.quantity-input');
        
        if (e.target.classList.contains('increase-btn')) {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 10) {
                quantityInput.value = currentValue + 1;
            }
        }
        
        if (e.target.classList.contains('decrease-btn')) {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        }
    });

    // Añadir productos al carrito
    productGrid.addEventListener("click", (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const index = e.target.getAttribute("data-index");
            const producto = productos[index];
            const quantityInput = e.target.closest('.product-info').querySelector('.quantity-input');
            const cantidad = parseInt(quantityInput.value);

            // Verificar si el producto ya está en el carrito
            const existingProductIndex = carrito.findIndex(item => item.producto.id === producto.id);
            
            if (existingProductIndex !== -1) {
                // Si ya existe, actualizar cantidad
                carrito[existingProductIndex].cantidad += cantidad;
            } else {
                // Si no existe, agregar nuevo
                carrito.push({ producto, cantidad });
            }

            actualizarCarrito();
            // Resetear cantidad a 1 después de añadir
            quantityInput.value = 1;
        }
    });

    // Eliminar producto del carrito
    carritoContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-from-cart-btn")) {
            const index = e.target.getAttribute("data-index");
            carrito.splice(index, 1);
            actualizarCarrito();
        }
    });

    // Mostrar detalles del producto al hacer clic en la imagen
    productGrid.addEventListener("click", (e) => {
        if (e.target.classList.contains("product-image")) {
            const index = e.target.getAttribute("data-index");
            const producto = productos[index];
            mostrarDetallesProducto(producto);
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const botonComprar = document.getElementById('boton-comprar-principal');
    
    if (botonComprar) {
        botonComprar.addEventListener('click', function() {
            const carritoContainer = document.querySelector('.carrito-container');
            if (!carritoContainer) {
                console.error('No se encontró el contenedor del carrito');
                return;
            }
            
            const emptyCartMessage = carritoContainer.querySelector('p');
            
            if (emptyCartMessage && emptyCartMessage.textContent.includes('No hay productos')) {
                alert('El carrito está vacío. Por favor, agrega productos antes de comprar.');
            } else {
                alert('¡Gracias por tu compra! Serás redirigido al proceso de pago.');
            }
        });
    } else {
        console.error('No se encontró el botón de comprar');
    }
});