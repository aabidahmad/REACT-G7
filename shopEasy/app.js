
const products = [
    {
        id: 1,
        name: "HP Laptop",
        category: "Electronics",
        description: "Powerful laptop for work and study.",
        price: 55999,
        image: "images/laptop.png",
        rating: 5
    },
    {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        description: "Latest smartphone with powerful performance.",
        price: 25999,
        image: "images/mobile.png",
        rating: 5
    },
    {
        id: 3,
        name: "Wireless Headphones",
        category: "Accessories",
        description: "Enjoy high quality sound with wireless freedom.",
        price: 2499,
        image: "images/headphone.png",
        rating: 4
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        description: "Comfortable and stylish shoes.",
        price: 1999,
        image: "images/shoes.png",
        rating: 4
    }
];


function createHeader(){
    const header = document.createElement("header");
    header.innerHTML =`<div class="logo">🛒 ShopEasy</div>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#categories">Categories</a>
            <a href="#contact">Contact</a>
            <a href="#" class="cart">
                🛒 Cart</a>
        </nav>`;
        header.className="header";
    return header;
}

function createHero(){
     const section = document.createElement("section");
     section.innerHTML=`<div class="hero-content">
                <h1>Welcome to ShopEasy</h1>
                <p>
                    Find the best products at the best prices</p>
                <a href="#products" class="shop-btn">Shop Now</a>
            </div>`;
            section.className="hero";

            return section 
}
function createCategories(){
    const section = document.createElement("section");
    section.innerHTML=`<h2>Shop by Category</h2>
            <p class="section-description">
                Explore products from different categories
            </p>
            <div class="categories">
                <div class="category">
                    <div class="category-icon"> 💻
                    </div>
                    <h3>Electronics</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        👕</div>
                    <h3>Clothing</h3>
                </div>
                <div class="category">
                    <div class="category-icon">
                        🎒</div>
                    <h3>Accessories</h3>
                </>div>
                <div class="category">
                    <div class="category-icon">
                        👟</div>
                    <h3>Footwear</h3>
                </div>
            </div>`;
            section.className="categories-section";

            return section;
}
export function App(root){
   root.appendChild(createHeader());
   root.appendChild(createHero());
   root.appendChild(createCategories());
}