import './Header.css';
function Header(){
    return(<>
        <header class="header">
        <div class="logo">🛒 ShopEasy</div>
        <nav class="navbar">
            <a href="#">Home</a>
            <a href="#products">Products</a>
            <a href="#categories">Categories</a>
            <a href="#contact">Contact</a>
            <a href="#" class="cart">
                🛒 Cart</a>
        </nav>
    </header></>           )
}
export default Header;