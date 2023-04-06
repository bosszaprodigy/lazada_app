<template>
  <div class="container">
    <div class="header">
      <!-- <img src="./assets/lazada-logo.png" alt="Lazada Logo" /> -->
      <img src="../assets/lazada_logo.png" alt="Lazada Logo" />
      <div class="search-box">
        <input type="text" placeholder="Search for products, brands and more" />
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="account">
        <i class="far fa-user"></i>
        <p>My Account</p>
      </div>
      <div class="cart">
        <i class="fas fa-shopping-cart"></i>
        <p>Cart</p>
      </div>
    </div>
    <div class="categories">
      <ul>
        <li><a href="#">Women's Fashion</a></li>
        <li><a href="#">Men's Fashion</a></li>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Health & Beauty</a></li>
        <li><a href="#">Home & Living</a></li>
        <li><a href="#">Mother & Baby</a></li>
        <li><a href="#">Sports & Travel</a></li>
        <li><a href="#">Automotive & Motorcycles</a></li>
        <li><a href="#">More Categories</a></li>
      </ul>
    </div>
    <div class="carousel">
      <img src="../assets/logo.png" alt="Carousel Image" />
      <img src="../assets/logo.png" alt="Carousel Image" />
      <img src="../assets/logo.png" alt="Carousel Image" />
    </div>logo
    <div class="products">
      <div class="product-card">
        <img src="../assets/logo.png" alt="Product Image" />
        <h3>Product Name</h3>
        <p>$99.99</p>
      </div>
      <div class="product-card">
        <img src="../assets/logo.png" alt="Product Image" />
        <h3>Product Name</h3>
        <p>$49.99</p>
      </div>
      <div class="product-card">
        <img src="../assets/logo.png" alt="Product Image" />
        <h3>Product Name</h3>
        <p>$29.99</p>
      </div>
      <div class="product-card">
        <img src="../assets/logo.png" alt="Product Image" />
        <h3>Product Name</h3>
        <p>$19.99</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mainpage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 20px;
}

.search-box input {
  border: none;
  padding: 10px;
  width: 300px;
  font-size: 16px;
}

.search-box button {
  background-color: #f90;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 10px;
  cursor: pointer;
}

.account,
.cart {
  display: flex;
  align-items: center;
}

.account p,
.cart p {
  margin-left: 10px;
}

.categories {
  background-color: #f2f2f2;
  padding: 20px;
}

.categories ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.categories ul li {
  margin-right: 10px;
}

.categories ul li a {
  color: #666;
  text-decoration: none;
}

.carousel {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.carousel img {
  width: 400px;
}

.products {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.product-card {
  width: 200px;
  text-align: center;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.product-card p {
  font-size: 14px;
  color: #f90;
}
</style>
