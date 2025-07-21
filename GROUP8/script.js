// JavaScript for mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked (optional, but good for UX)
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// WhatsApp Order Function
function order(price, description) {
    // Create a message box container
    const messageBox = document.createElement('div');
    messageBox.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'p-4');
    messageBox.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Confirm Your Order</h3>
            <p class="text-lg text-gray-700 mb-6">You are ordering: <br><strong class="text-red-600">${description} (${price})</strong></p>
            <input type="text" id="customerNameInput" placeholder="Enter your name" class="p-3 border border-gray-300 rounded-lg w-full mb-6 focus:ring-red-500 focus:border-red-500">
            <div class="flex justify-around space-x-4">
                <button id="confirmOrderBtn" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out flex-1">
                    Confirm & WhatsApp
                </button>
                <button id="cancelOrderBtn" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-full shadow-md transform hover:scale-105 transition duration-300 ease-in-out flex-1">
                    Cancel
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(messageBox);

    const customerNameInput = document.getElementById('customerNameInput');
    const confirmOrderBtn = document.getElementById('confirmOrderBtn');
    const cancelOrderBtn = document.getElementById('cancelOrderBtn');

    confirmOrderBtn.addEventListener('click', () => {
        const name = customerNameInput.value.trim();
        if (name) {
            const message = `Hello Daddy Vasco, I want to order:\n${description} (${price})\nName: ${name}`;
            const whatsappNumber = '233263596576'; // Replace with real WhatsApp number
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.location.href = url;
            messageBox.remove(); // Remove the message box after action
        } else {
            customerNameInput.placeholder = 'Please enter your name!';
            customerNameInput.classList.add('border-red-500'); // Highlight input if empty
        }
    });

    cancelOrderBtn.addEventListener('click', () => {
        messageBox.remove(); // Remove the message box on cancel
    });
}