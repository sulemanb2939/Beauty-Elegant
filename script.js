// Menu Data
const menuItems = [
    // Makeup
    {
        id: 1,
        name: "Matte Lipstick (Red Velvet)",
        category: "makeup",
        price: "1,200",
        description: "Long-lasting matte lipstick with a velvety finish.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 2,
        name: "Liquid Foundation (Ivory)",
        category: "makeup",
        price: "2,500",
        description: "Full coverage foundation for a flawless base.",
        image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 3,
        name: "Volumizing Mascara",
        category: "makeup",
        price: "1,500",
        description: "Intense black mascara for dramatic lashes.",
        image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 4,
        name: "Eyeliner Pen (Jet Black)",
        category: "makeup",
        price: "950",
        description: "Waterproof precision eyeliner for the perfect wing.",
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 5,
        name: "Blush Palette (Peach & Pink)",
        category: "makeup",
        price: "1,800",
        description: "Highly pigmented blush duo for a natural glow.",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 6,
        name: "Eyeshadow Palette (Nude)",
        category: "makeup",
        price: "3,200",
        description: "12-shade eyeshadow palette with matte and shimmer shades.",
        image: "./images/eyeshadow_nude.png",
        popular: true
    },

    // Skincare
    {
        id: 7,
        name: "Vitamin C Serum",
        category: "skincare",
        price: "1,950",
        description: "Brightening serum to reduce dark spots and uneven tone.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 8,
        name: "Hyaluronic Acid Moisturizer",
        category: "skincare",
        price: "2,100",
        description: "Deep hydration for plump and glowing skin.",
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 9,
        name: "Aloe Vera Face Wash",
        category: "skincare",
        price: "850",
        description: "Gentle cleanser for all skin types.",
        image: "./images/aloe_vera_face_wash.png",
        popular: false
    },
    {
        id: 10,
        name: "Rose Water Toner",
        category: "skincare",
        price: "600",
        description: "Refreshing mist to balance skin pH.",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 11,
        name: "Sunblock SPF 60",
        category: "skincare",
        price: "1,400",
        description: "Non-greasy sun protection for daily use.",
        image: "./images/sunblock_spf60.png",
        popular: true
    },
    {
        id: 12,
        name: "Charcoal Face Mask",
        category: "skincare",
        price: "950",
        description: "Detoxifying clay mask to unclog pores.",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
        popular: false
    },

    // Haircare
    {
        id: 13,
        name: "Argan Oil Shampoo",
        category: "haircare",
        price: "1,600",
        description: "Nourishing shampoo for dry and damaged hair.",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 14,
        name: "Keratin Conditioner",
        category: "haircare",
        price: "1,600",
        description: "Smooth and silky finish for frizzy hair.",
        image: "./images/keratin_conditioner.png",
        popular: false
    },
    {
        id: 15,
        name: "Hair Growth Oil",
        category: "haircare",
        price: "1,250",
        description: "Herbal oil blend to promote hair growth.",
        image: "./images/hair_growth_oil.png",
        popular: true
    },
    {
        id: 16,
        name: "Hair Serum",
        category: "haircare",
        price: "1,100",
        description: "Adds shine and controls frizz instantly.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 17,
        name: "Deep Conditioning Mask",
        category: "haircare",
        price: "1,800",
        description: "Weekly treatment for intense repair.",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 18,
        name: "Styling Gel",
        category: "haircare",
        price: "750",
        description: "Strong hold gel for all hair styles.",
        image: "./images/Styling Ge.png",
        popular: false
    },

    // Perfumes
    {
        id: 19,
        name: "Rose Oud Perfume",
        category: "perfumes",
        price: "4,500",
        description: "Luxury oriental fragrance with rose and oud notes.",
        image: "./images/rose_oud.png",
        popular: true
    },
    {
        id: 20,
        name: "Floral Mist",
        category: "perfumes",
        price: "2,200",
        description: "Light and refreshing floral scent for day wear.",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
        popular: true
    },
    {
        id: 21,
        name: "Classic Musk",
        category: "perfumes",
        price: "3,000",
        description: "Timeless musk fragrance for men and women.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 22,
        name: "Pocket Perfume Set",
        category: "perfumes",
        price: "1,500",
        description: "Set of 3 mini perfumes, perfect for travel.",
        image: "./images/pocket_perfumes.jpg",
        popular: false
    },
    {
        id: 23,
        name: "Body Mist (Vanilla)",
        category: "perfumes",
        price: "950",
        description: "Sweet vanilla scented body mist.",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 24,
        name: "Attar (Jasmine)",
        category: "perfumes",
        price: "800",
        description: "Pure concentrated jasmine oil.",
        image: "./images/jasmine_attar.png",
        popular: false
    },

    // Accessories
    {
        id: 25,
        name: "Makeup Brush Set (12 pcs)",
        category: "accessories",
        price: "2,500",
        description: "Professional makeup brushes with soft bristles.",
        image: "./images/makeup_brushes.png",
        popular: true
    },
    {
        id: 26,
        name: "Beauty Blender Trio",
        category: "accessories",
        price: "900",
        description: "Soft makeup sponges for flawless blending.",
        image: "./images/beauty_blender.jpg",
        popular: true
    },
    {
        id: 27,
        name: "Eyelash Curler",
        category: "accessories",
        price: "650",
        description: "Premium steel eyelash curler.",
        image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 28,
        name: "Hair Clips (Pearl Set)",
        category: "accessories",
        price: "500",
        description: "Elegant pearl hair clips for styling.",
        image: "./images/hair_clips.jpg",
        popular: false
    },
    {
        id: 29,
        name: "Handheld Mirror",
        category: "accessories",
        price: "1,200",
        description: "Vintage style handheld vanity mirror.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        popular: false
    },
    {
        id: 30,
        name: "Cosmetic Pouch",
        category: "accessories",
        price: "800",
        description: "Travel-friendly pouch for your makeup essentials.",
        image: "./images/cosmetic_pouch.png",
        popular: false
    }
];

// State
let currentCategory = 'all';
let currentSearchTerm = '';
let currentCategories = new Set();

// Cart State
let cart = JSON.parse(localStorage.getItem('beautyCart')) || []; // Updated Storage Key
let orderCounter = parseInt(localStorage.getItem('beautyOrderCounter')) || 0; // Updated Storage Key

// DOM Elements
const foodGrid = document.getElementById('foodGrid');
const tabButtons = document.querySelectorAll('.tab-btn');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const filterBottomSheet = document.getElementById('filterBottomSheet');

// DOM Elements (Updated)
const cartTrigger = document.getElementById('cartTrigger');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const cartCount = document.getElementById('cartCount');
const startOrderingBtn = document.getElementById('startOrderingBtn');
// Checkout Elements
const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModalBtn = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const backToCartBtn = document.getElementById('backToCartBtn');

// ... (Search Elements remain the same) ...
const desktopSearchInput = document.getElementById('desktopSearch');
const mobileSearchTrigger = document.getElementById('mobileSearchTrigger');
const mobileSearchOverlay = document.getElementById('mobileSearchOverlay');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const closeSearchBtn = document.getElementById('closeSearch');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Beauty Store App Initialized');

    // Cart Initialization
    updateCartUI();

    // Render Items
    renderFoodItems();

    // Event Setup
    setupEventListeners();
    setupHamburgerMenu();
    setupBottomSheetFilter();
    setupSearch();
});

// Helper: Parse price string "1,200" -> 1200
function parsePrice(priceStr) {
    return parseInt(priceStr.replace(/,/g, ''));
}

// ==========================================
// CART LOGIC
// ==========================================

function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    openCart(); // Optional: open cart when item added to confirm
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    const newQty = item.quantity + delta;

    if (newQty < 1) {
        removeFromCart(id);
    } else {
        item.quantity = newQty;
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('beautyCart', JSON.stringify(cart)); // Updated Key
}

function updateCartUI() {
    // 1. Update Badge
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalQty;

    // Animate badge
    cartCount.style.transform = 'scale(1.2)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);

    // 2. Update Cart Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is empty</p>
                <button class="btn btn-primary" onclick="closeCart()">Start Shopping</button>
            </div>
        `;
        cartTotalAmount.innerText = 'Rs 0';
        if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = true;
        return;
    }

    if (proceedToCheckoutBtn) proceedToCheckoutBtn.disabled = false;
    let grandTotal = 0;

    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = parsePrice(item.price) * item.quantity;
        grandTotal += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <div class="cart-item-price">Rs. ${item.price}</div>
                    <div class="cart-item-actions">
                        <button class="qty-btn-mini" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn-mini" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                </button>
            </div>
        `;
    }).join('');

    cartTotalAmount.innerText = `Rs ${grandTotal.toLocaleString()}`;
}

// Drawer Control
function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Only reset if no modal is open (handled by specific flows)
}

// Step 2: Checkout Modal Logic
function openCheckoutModal() {
    // Close cart first (but keep overflow hidden)
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');

    // Open Modal
    checkoutModal.classList.add('active');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function backToCart() {
    checkoutModal.classList.remove('active');
    openCart();
}

// Order ID Generation
function generateOrderId() {
    const year = new Date().getFullYear();
    orderCounter++;
    localStorage.setItem('beautyOrderCounter', orderCounter); // Updated Key
    const orderNum = String(orderCounter).padStart(6, '0');
    return `BE-${year}-${orderNum}`; // Updated Prefix
}

// Final Submit Handler
function handleOrderConfirm(e) {
    e.preventDefault();

    if (cart.length === 0) return;

    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const city = document.getElementById('checkoutCity').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const notes = document.getElementById('checkoutNotes').value.trim();

    if (!name || !phone || !city || !address) {
        alert('Please fill in all required fields (Name, Phone, City, Address).');
        return;
    }

    const orderId = generateOrderId();
    const grandTotal = cart.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);

    // Build Message
    let message = `*New Order – BEAUTY ELEGANT*\n`;
    message += `Order ID: *${orderId}*\n\n`;
    message += `*Items:*\n`;

    cart.forEach(item => {
        const itemTotal = parsePrice(item.price) * item.quantity;
        message += `• ${item.quantity} × ${item.name} (${item.price}) = Rs ${itemTotal}\n`;
    });

    message += `\n*Total Amount: Rs ${grandTotal.toLocaleString()}*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `City: ${city}\n`;
    message += `Address: ${address}\n`;
    if (notes) message += `Notes: ${notes}\n`;

    // Send
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '923080085212'; // Updated Number

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // cleanup
    cart = [];
    saveCart();
    updateCartUI();
    closeCheckoutModal();
    checkoutForm.reset();
}


// ==========================================
// FILTER & RENDER LOGIC
// ==========================================

function applyFilters() {
    let filteredItems = menuItems;

    // 1. Filter by Categories
    if (currentCategories.size > 0) {
        filteredItems = filteredItems.filter(item => currentCategories.has(item.category));
    }

    // 2. Filter by Search
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.category.toLowerCase().includes(term)
        );
    }

    renderFilteredResults(filteredItems);
}

function renderFilteredResults(items) {
    if (items.length === 0) {
        foodGrid.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
                <h3>No items found</h3>
                <p>We couldn't find anything matching "${currentSearchTerm || 'your selection'}". Try searching for something else!</p>
            </div>
        `;
        return;
    }

    foodGrid.innerHTML = items.map(item => `
        <div class="food-card" data-id="${item.id}">
            <div class="food-image-wrapper">
                <img src="${item.image}" 
                     alt="${item.name}" 
                     class="food-image" 
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=600&q=80';">
                <div class="food-overlay"></div>
                ${item.popular ? '<span class="popular-badge">Popular</span>' : ''}
            </div>
            <div class="food-details">
                <h3 class="food-name">${item.name}</h3>
                <p class="food-description">${item.description}</p>
                <div class="food-footer">
                    <span class="food-price">Rs. ${item.price}</span>
                    <button class="btn btn-primary" onclick="addToCart(${item.id})">
                        Add to Cart 
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFoodItems(category) {
    if (category && category !== 'all') {
        currentCategories.clear();
        currentCategories.add(category);
    } else if (category === 'all') {
        currentCategories.clear();
    }
    applyFilters();
}

// ==========================================
// EVENT SETUP
// ==========================================

function setupEventListeners() {
    // Category Tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            renderFoodItems(category);
        });
    });

    // Cart Events
    cartTrigger.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Checkout Flow Events
    if (proceedToCheckoutBtn) {
        proceedToCheckoutBtn.addEventListener('click', openCheckoutModal);
    }

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleOrderConfirm);
    }

    if (backToCartBtn) {
        backToCartBtn.addEventListener('click', backToCart);
    }

    if (closeCheckoutModalBtn) {
        closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
    }

    // Close modal on overlay click
    const modalOverlay = checkoutModal.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeCheckoutModal);
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Search Setup
function setupSearch() {
    desktopSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        applyFilters();
    });

    mobileSearchTrigger.addEventListener('click', () => {
        mobileSearchOverlay.classList.add('active');
        setTimeout(() => mobileSearchInput.focus(), 300);
        document.body.style.overflow = 'hidden';
    });

    closeSearchBtn.addEventListener('click', () => {
        mobileSearchOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentSearchTerm = '';
        mobileSearchInput.value = '';
        desktopSearchInput.value = '';
        applyFilters();
    });

    mobileSearchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value;
        desktopSearchInput.value = currentSearchTerm;
        applyFilters();
    });
}

// Bottom Sheet Filter
function setupBottomSheetFilter() {
    if (!mobileFilterBtn || !filterBottomSheet) return;

    const overlay = filterBottomSheet.querySelector('.bottom-sheet-overlay');
    const filterPills = filterBottomSheet.querySelectorAll('.filter-pill');
    const applyBtn = document.getElementById('applyFiltersBtn');
    const clearBtn = document.getElementById('clearFiltersBtn');

    mobileFilterBtn.addEventListener('click', () => {
        filterBottomSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', () => {
        filterBottomSheet.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            if (pill.classList.contains('selected')) {
                pill.classList.remove('selected');
                currentCategories.delete(category);
            } else {
                pill.classList.add('selected');
                currentCategories.add(category);
            }
        });
    });

    clearBtn.addEventListener('click', () => {
        filterPills.forEach(pill => pill.classList.remove('selected'));
        currentCategories.clear();
        applyFilters();
    });

    applyBtn.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        if (currentCategories.size === 0) {
            tabButtons.forEach(btn => {
                if (btn.dataset.category === 'all') btn.classList.add('active');
            });
        }
        applyFilters();
        setTimeout(() => {
            filterBottomSheet.classList.remove('active');
            document.body.style.overflow = 'auto';
        }, 150);
    });
}

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    document.querySelectorAll('.mobile-menu-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') &&
            !mobileMenu.contains(e.target) &&
            !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

// Expose functions slightly for inline onclick handlers if needed, 
// though event listeners are better. But I used onclick in template literals above.
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
window.closeCart = closeCart;
