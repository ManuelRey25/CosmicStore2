document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, name: "Telescopio Explorador Junior", price: 29.99, quantity: 0, description: "Telescopio básico perfecto para iniciar a los niños en la astronomía", img: src="img/telescopio6.jpg"},
        { id: 2, name: "Kit Sistema Solar 3D", price: 24.99, quantity: 0, description: "Modelo del sistema solar que brilla en la oscuridad", img: src="img/planetas-sistema-solar.gif" },
        { id: 3, name: "Proyector de Estrellas", price: 34.99, quantity: 0, description: "Proyecta un cielo estrellado en el techo de la habitación", img: src="img/planetas-sistema-solar2.gif" },
        { id: 4, name: "Rover Lunar RC", price: 39.99, quantity: 0, description: "Vehículo lunar controlado por control remoto", img: src="img/tienda1.jpg" },
        { id: 5, name: "Cohete Espacial DIY", price: 19.99, quantity: 0, description: "Kit para construir tu propio cohete de juguete", img: src="img/tienda2.jpg" },
        { id: 6, name: "Planetario de Bolsillo", price: 15.99, quantity: 0, description: "Dispositivo portátil para identificar constelaciones", img: src="img/globo2.jpg" }
    ];

    const shopContainer = document.getElementById('astronomy-shop');

    const renderShop = () => {
        shopContainer.innerHTML = '';
        let total = 0;

        const form = document.createElement('form');
        form.action = "https://formspree.io/f/xovaglgb";
        form.method = "POST";

        // Productos Grid
        const productsGrid = document.createElement('div');
        productsGrid.className = 'products-grid';

        items.forEach(item => {
            total += item.price * item.quantity;

            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="card-image">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">$${item.price}</div>
                    <div class="quantity-controls">
                        <button type="button" class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button type="button" class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <input type="hidden" name="item_${item.id}_name" value="${item.name}">
                    <input type="hidden" name="item_${item.id}_price" value="${item.price}">
                    <input type="hidden" name="item_${item.id}_quantity" value="${item.quantity}">
                </div>
            `;

            productsGrid.appendChild(card);
        });

        form.appendChild(productsGrid);

        // Resumen del carrito
        const cartSummary = document.createElement('div');
        cartSummary.className = 'cart-summary';
        cartSummary.innerHTML = `
            <h3>Resumen del Carrito - Forma de pago en efectivo al entregar mercadería</h3>
            <div class="cart-total">Total: $${total.toFixed(2)}</div>
            <input type="hidden" name="total_amount" value="${total.toFixed(2)}">
        `;

        // Información del cliente
        const customerInfo = document.createElement('div');
        customerInfo.className = 'customer-info';
        customerInfo.innerHTML = `
            <h3>Información del Cliente</h3>
            <input type="text" name="name" placeholder="Nombre completo" required class="input">
            <input type="phone" phone="phone" placeholder="Teléfono de contacto" required class="input">
            <input type="email" name="email" placeholder="Correo electrónico" required class="input">
            <textarea name="additional_comments" placeholder="Comentarios adicionales" class="input" rows="4"></textarea>
        `;

        const submitButton = document.createElement('button');
        submitButton.type = "submit";
        submitButton.textContent = "Realizar Pedido";
        submitButton.className = "btn";

        form.appendChild(cartSummary);
        form.appendChild(customerInfo);
        form.appendChild(submitButton);

        shopContainer.appendChild(form);
    };

    window.updateQuantity = (id, increment) => {
        const item = items.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(0, item.quantity + increment);
            renderShop();
        }
    };

    renderShop();
});