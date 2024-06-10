// Exibir mensagem 
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Produto adicionado ao carrinho!');
        });
    });
});

// Cadastro
document.addEventListener('DOMContentLoaded', (event) => {
    const openModalBtn = document.getElementById('openModalBtn');
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('registration-form-container');
    const closeBtn = document.getElementById('closeBtn');

    openModalBtn.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    });

    closeBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const overlay = document.getElementById('overlay');
    const registrationFormContainer = document.getElementById('registration-form-container');
    const closeBtn = document.getElementById('closeBtn');

    const openCartBtn = document.getElementById('openCartBtn');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartModal = document.getElementById('cart-modal');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItems = document.getElementById('cart-items');
    const buttons = document.querySelectorAll('.product button');

    let cart = [];

    openCartBtn.addEventListener('click', function () {
        cartOverlay.classList.remove('hidden');
        cartModal.classList.remove('hidden');
    });

    closeCartBtn.addEventListener('click', function () {
        cartOverlay.classList.add('hidden');
        cartModal.classList.add('hidden');
    });

    cartOverlay.addEventListener('click', function (event) {
        if (event.target === cartOverlay) {
            cartOverlay.classList.add('hidden');
            cartModal.classList.add('hidden');
        }
    });

    buttons.forEach(function (button) {
        button.addEventListener('click', addToCart);
    });

    // Adicionar produto no carrinho
    function addToCart(event) {
        const product = event.target.closest('.product');
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText;

        cart.push({
            name: productName,
            price: productPrice
        });

        updateCart();
    }

    // Remover produto do carrinho
    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(function (item, index) {
            const li = document.createElement('li');
            li.innerHTML = `${item.name} - ${item.price} <button class="remove-btn" data-index="${index}">-</button>`;
            cartItems.appendChild(li);
        });

        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    function removeFromCart(event) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
    }
});

// Voltar ao index.html
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('backArrow').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    document.getElementById('calculateShipping').addEventListener('click', function () {
    });

    document.getElementById('finalizePurchase').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });

    document.getElementById('closeModal').addEventListener('click', function () {
        document.getElementById('modal').style.display = 'none';
    });
});

