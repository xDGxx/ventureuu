// Carrinho de compras
let cart = [];

// Adicionar produto ao carrinho
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Remover produto do carrinho
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Atualizar o conteúdo do carrinho
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items-container');
    cartItemsContainer.innerHTML = ''; // Limpa os itens atuais

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p class="item-price">R$ ${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remover</button>
        `;

        cartItemsContainer.appendChild(itemElement);
    });

    // Atualizar total do carrinho
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Finalizar compra (simulação)
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Compra finalizada! Total: R$ ' + document.getElementById('cart-total').textContent);
});

// Exemplos de produtos
const exampleProducts = [
    { name: "Moletom Sgonia", price: 289.99, image: "assets/produtos/inverno/Image 5.svg" },
    { name: "Moletom ChillMode", price: 189.99, image: "assets/produtos/inverno/Image 5 (1).svg" },
    { name: "Moletom Adventure", price: 249.99, image: "assets/produtos/inverno/Image 5 (2).svg" }
];

// Adicionando produtos ao carrinho de exemplo (você pode substituir por lógica real)
addToCart(exampleProducts[0]);
addToCart(exampleProducts[1]);

